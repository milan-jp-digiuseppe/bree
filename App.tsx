import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/feature/app/RootStackScreen";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
