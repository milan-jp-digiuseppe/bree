import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import { Input } from "@rneui/base";
import { theme } from "../../theme";
import BreeButton from "../../component/BreeButton";
import { useCashAdvanceContext } from "./CashAdvanceContext";
import IMask, { MaskedPattern } from "imask";

const mask = new IMask.MaskedPattern({
  mask: "$num",
  blocks: {
    num: {
      mask: Number,
      radix: ".",
      scale: 2, // digits after radix
      thousandsSeparator: ",",
      normalizeZeros: true,
    },
  },
});

const AmountScreen = () => {
  const navigation = useNavigation();
  const { setAmountCents } = useCashAdvanceContext();
  const [amount, setAmount] = useState("");
  const [validationError, setValidationError] = useState("");

  const onChangeText = useCallback((amt: string) => {
    if (amt.charAt(amt.length - 1) === ".") {
      setAmount(amt);
    } else {
      mask.value = amt;
      setAmount(mask.value);
    }
  }, []);

  const onSubmit = useCallback(() => {
    const amountFloat = parseFloat(mask.unmaskedValue);
    if (!amountFloat) {
      setValidationError("Enter an amount");
      return;
    }
    const amountCents = parseFloat(mask.unmaskedValue) * 100;
    // TODO: pull advance limit
    if (amountCents >= 500_00) {
      setValidationError("Must be less than limit of $500.00");
      return;
    }

    setAmountCents(amountCents);
    navigation.navigate("Summary");
  }, []);

  return (
    <BreeScreenContainer
      enableKAV={true}
      style={{ justifyContent: "space-between" }}
    >
      <ScrollView style={{ paddingHorizontal: theme.spacing.screenPadding }}>
        <Input
          value={amount}
          onChangeText={onChangeText}
          label="Cash Advance"
          keyboardType="decimal-pad"
          containerStyle={{ marginTop: theme.spacing.unit2x }}
          placeholder="$0"
          errorMessage={validationError}
        />
      </ScrollView>
      <BreeButton
        title="Next"
        onPress={onSubmit}
        style={{
          marginHorizontal: theme.spacing.screenPadding,
          marginBottom: theme.spacing.screenPadding,
        }}
      />
    </BreeScreenContainer>
  );
};

export default AmountScreen;
