import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import CashAdvanceStackScreen from "../cash-advance/CashAdvanceStackScreen";
import { theme } from "../../theme";
import BreeLogo from "../../component/BreeLogo";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <BreeLogo />,
          headerStyle: {
            backgroundColor: theme.color.blue,
          },
        }}
      />
      <Stack.Screen
        name="CashAdvanceStack"
        component={CashAdvanceStackScreen}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
