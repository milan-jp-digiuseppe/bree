import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import { Input } from "@rneui/base";
import { theme } from "../../theme";
import BreeButton from "../../component/BreeButton";
import { useCashAdvanceContext } from "./CashAdvanceContext";

const AdvanceSuccessScreen = () => {
  const navigation = useNavigation();

  const onPressDone = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  return (
    <BreeScreenContainer
      enableKAV={true}
      style={{ justifyContent: "space-between" }}
    >
      <BreeButton
        title="Done"
        onPress={onPressDone}
        style={{
          marginHorizontal: theme.spacing.screenPadding,
          marginBottom: theme.spacing.screenPadding,
        }}
      />
    </BreeScreenContainer>
  );
};

export default AdvanceSuccessScreen;
