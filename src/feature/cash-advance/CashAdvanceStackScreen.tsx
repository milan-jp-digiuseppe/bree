import { Button, SafeAreaView, Text } from "react-native";
import AmountScreen from "./AmountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SummaryScreen from "./SummaryScreen";
import { Icon } from "@rneui/base";
import CashAdvanceContextProvider from "./CashAdvanceContext";
import AdvanceSuccessScreen from "./AdvanceSuccessScreen";

const CashAdvanceStack = createNativeStackNavigator();
const CashAdvanceStackScreen = () => {
  return (
    <CashAdvanceContextProvider>
      <CashAdvanceStack.Navigator>
        <CashAdvanceStack.Screen
          name="Amount"
          component={AmountScreen}
          options={({ navigation }) => ({
            headerLeft: () => <Icon name="close" onPress={navigation.goBack} />,
          })}
        />
        <CashAdvanceStack.Screen
          name="Summary"
          component={SummaryScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon name="chevron-left" onPress={navigation.goBack} />
            ),
          })}
        />
        {/* TODO: put in modal group */}
        <CashAdvanceStack.Screen
          name="AdvanceSuccess"
          component={AdvanceSuccessScreen}
        />
        {/* <CashAdvanceStack.Screen name="AdvanceFailed" component={AdvanceFailedScreen} /> */}
      </CashAdvanceStack.Navigator>
    </CashAdvanceContextProvider>
  );
};

export default CashAdvanceStackScreen;
