import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import CashAdvanceStackScreen from "../cash-advance/CashAdvanceStackScreen";
import { Button } from "react-native";
import { Image, Text } from "@rneui/base";
import { theme } from "../../theme";
import BreeLogo from "../../component/BreeLogo";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  // const navigation = useNavigation();

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
