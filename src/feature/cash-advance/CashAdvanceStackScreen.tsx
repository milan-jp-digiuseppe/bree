import AmountScreen from "./AmountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SummaryScreen from "./SummaryScreen";
import { Icon } from "@rneui/base";
import CashAdvanceContextProvider from "./CashAdvanceContext";
import AdvanceSuccessScreen from "./AdvanceSuccessScreen";
import { useCallback } from "react";

const CashAdvanceStack = createNativeStackNavigator();
const CashAdvanceStackScreen = () => {
  const navigation = useNavigation();

  // This will unmount the whole stack since the useNavigation hook is mounted above the stack
  const onFinish = useCallback(() => navigation.goBack(), []);

  return (
    <CashAdvanceContextProvider onFinish={onFinish}>
      <CashAdvanceStack.Navigator>
        <CashAdvanceStack.Screen
          name="Amount"
          component={AmountScreen}
          options={({ navigation: navInner }) => ({
            headerLeft: () => <Icon name="close" onPress={navInner.goBack} />,
          })}
        />
        <CashAdvanceStack.Screen
          name="Summary"
          component={SummaryScreen}
          options={({ navigation: navInner }) => ({
            headerLeft: () => (
              <Icon name="chevron-left" onPress={navInner.goBack} />
            ),
          })}
        />
        <CashAdvanceStack.Screen
          name="AdvanceSuccess"
          component={AdvanceSuccessScreen}
          options={{
            headerLeft: () => <Icon name="close" onPress={onFinish} />,
            headerTitle: "",
          }}
        />
      </CashAdvanceStack.Navigator>
    </CashAdvanceContextProvider>
  );
};

export default CashAdvanceStackScreen;
