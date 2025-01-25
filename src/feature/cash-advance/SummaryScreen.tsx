import { useCallback } from "react";
import { Button, SafeAreaView, ScrollView, View } from "react-native";
import { useCashAdvanceContext } from "./CashAdvanceContext";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import BreeButton from "../../component/BreeButton";
import { theme } from "../../theme";
import { Divider, Text } from "@rneui/base";
import BreeBreakdownItem from "../../component/BreeBreakdownItem";
import BreeSectionTitle from "../../component/BreeSectionTitle";
import { addDays, format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import Dinero from "dinero.js";
import { centsToDinero, formatDinero } from "../../utils/money";
import { formatDate } from "../../utils/date";

const COST_PER_100_BORROWED_DOLLARS = 15;

const SummaryScreen = () => {
  const navigator = useNavigation();
  const { amountCents } = useCashAdvanceContext();

  const requestedAmountDinero = centsToDinero(amountCents);
  const borrowingCostDinero = requestedAmountDinero
    .divide(100)
    .multiply(COST_PER_100_BORROWED_DOLLARS);
  const repayAmountDinero = requestedAmountDinero.add(borrowingCostDinero);

  const paybackDate = addDays(new Date(), 14);

  const onSubmit = useCallback(() => {
    navigator.navigate("AdvanceSuccess");
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
                centsToDinero(COST_PER_100_BORROWED_DOLLARS * 100)
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
        <BreeBreakdownItem label="14 days" value={formatDate(paybackDate)} />
      </ScrollView>

      <BreeButton
        title="Submit"
        onPress={onSubmit}
        style={{
          marginHorizontal: theme.spacing.screenPadding,
          marginBottom: theme.spacing.screenPadding,
        }}
      />
    </BreeScreenContainer>
  );
};

export default SummaryScreen;
