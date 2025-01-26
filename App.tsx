import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/feature/app/RootStackScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OfflineStatusBar from "./src/feature/offline/OfflineStatusBar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <OfflineStatusBar />
          <RootStackScreen />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
