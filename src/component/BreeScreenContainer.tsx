import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { theme } from "../theme";
import { PropsWithChildren } from "react";
import { useHeaderHeight } from "@react-navigation/elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});

interface Props {
  style?: StyleProp<ViewStyle>;
  enableKAV?: boolean;
}

const BreeScreenContainer: React.FC<PropsWithChildren<Props>> = ({
  style,
  enableKAV = false,
  children,
}) => {
  const height = useHeaderHeight();
  const Component = enableKAV ? KeyboardAvoidingView : View;

  return (
    <SafeAreaView style={styles.container}>
      <Component
        behavior="padding"
        keyboardVerticalOffset={height}
        style={[style, styles.container]}
      >
        {children}
      </Component>
    </SafeAreaView>
  );
};

export default BreeScreenContainer;
