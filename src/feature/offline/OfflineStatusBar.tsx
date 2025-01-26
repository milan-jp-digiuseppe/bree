import { StyleSheet, View } from "react-native";
import { theme } from "../../theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import BreeText from "../../component/BreeText";

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "red",
    alignItems: "center",
    paddingBottom: theme.spacing.unit,
  },
});

const OfflineStatusBar = () => {
  const { top } = useSafeAreaInsets();
  const [isNetworkConnected, setIsNetworkConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.warn({ state });
      setIsNetworkConnected(!!state.isConnected);
    });

    return () => unsubscribe();
  }, [setIsNetworkConnected]);

  if (!isNetworkConnected) {
    return null;
  }

  return (
    <View style={[styles.bar, { paddingTop: top }]}>
      <BreeText color={theme.color.white} fontWeight="bold">
        You are offline
      </BreeText>
    </View>
  );
};

export default OfflineStatusBar;
