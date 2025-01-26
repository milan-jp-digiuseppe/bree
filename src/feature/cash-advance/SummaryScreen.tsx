import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { useCashAdvanceContext } from "./CashAdvanceContext";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import BreeButton from "../../component/BreeButton";
import { theme } from "../../theme";
import BreeBreakdownItem from "../../component/BreeBreakdownItem";
import BreeSectionTitle from "../../component/BreeSectionTitle";
import { addDays } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { centsToDinero, formatDinero } from "../../utils/money";
import { formatDate } from "../../utils/date";
import { useHomeQuery } from "../home/HomeApi";
import { useRequestCashAdvanceMutation } from "./CashAdvanceApi";
import Toast, { ErrorToast } from "react-native-toast-message";

const SummaryScreen = () => {
  const navigator = useNavigation();
  const { amountCents } = useCashAdvanceContext();
  const { data } = useHomeQuery();
  const { mutateAsync: requestCashAdvance } = useRequestCashAdvanceMutation();
  const [isLoading, setIsLoading] = useState(false);

  const requestedAmountDinero = centsToDinero(amountCents);
  const borrowingCostDinero = requestedAmountDinero
    .divide(100)
    .multiply(data!.cashAdvancePolicy.costPerHunderDollarsBorrowed / 100);
  const repayAmountDinero = requestedAmountDinero.add(borrowingCostDinero);

  const paybackDate = addDays(new Date(), 14);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      await requestCashAdvance({ amount: amountCents });
      navigator.navigate("AdvanceSuccess");
    } catch (err) {
      Toast.show({
        text1: "Something went wrong",
        text2: "Please try again later",
        autoHide: false,
        topOffset: theme.spacing.unit,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <BreeScreenContainer>
      <ScrollView
        contentContainerStyle={{
          marginHorizontal: theme.spacing.screenPadding,
        }}
      >
        <BreeSectionTitle title="Breakdown" />
        <BreeBreakdownItem
          label="Requested amount"
          value={formatDinero(requestedAmountDinero)}
        />
        <BreeBreakdownItem
          label="Cost of borrowing"
          value={formatDinero(borrowingCostDinero)}
          subItems={[
            {
              label: "Cost per $100 borrowed",
              value: formatDinero(
                centsToDinero(
                  data!.cashAdvancePolicy.costPerHunderDollarsBorrowed
                )
              ),
            },
            {
              label: "Total",
              value: formatDinero(borrowingCostDinero),
            },
          ]}
        />
        <BreeBreakdownItem
          label="Total you repay"
          value={formatDinero(repayAmountDinero)}
        />

        <BreeSectionTitle title="Payback schedule" />
        <BreeBreakdownItem
          label={`${data!.cashAdvancePolicy.paybackDuration} days`}
          value={formatDate(paybackDate)}
        />
      </ScrollView>

      <BreeButton
        title="Submit"
        onPress={onSubmit}
        isLoading={isLoading}
        style={{
          marginHorizontal: theme.spacing.screenPadding,
          marginBottom: theme.spacing.screenPadding,
        }}
      />
      <Toast
        config={{
          error: ErrorToast,
        }}
      />
    </BreeScreenContainer>
  );
};

export default SummaryScreen;
