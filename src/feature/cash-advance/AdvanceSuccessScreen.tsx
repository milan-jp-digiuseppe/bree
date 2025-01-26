import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  useAnimatedValue,
  useWindowDimensions,
  View,
} from "react-native";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import { Text } from "@rneui/base";
import { theme } from "../../theme";
import BreeButton from "../../component/BreeButton";
import { useCashAdvanceContext } from "./CashAdvanceContext";
import { centsToDinero, formatDinero } from "../../utils/money";

const styles = StyleSheet.create({
  title: {
    marginHorizontal: theme.spacing.screenPadding,
    alignItems: "center",
    gap: theme.spacing.unit2x,
    marginTop: theme.spacing.unit6x,
  },
});

const AdvanceSuccessScreen = () => {
  const navigation = useNavigation();
  const { amountCents, onFinish } = useCashAdvanceContext();
  const amountFormatted = formatDinero(centsToDinero(amountCents));

  const { width: screenWidth } = useWindowDimensions();
  const moneyAnimatedValue = useAnimatedValue(1);

  useEffect(() => {
    Animated.timing(moneyAnimatedValue, {
      toValue: 0,
      delay: 500,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.elastic(1),
    }).start();
  }, []);

  const animatedOpacity = moneyAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const animatedTransform = moneyAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, screenWidth * -1],
  });

  const onPressDone = useCallback(() => {
    onFinish();
  }, [navigation]);

  return (
    <BreeScreenContainer enableKAV={true}>
      <View style={{ flex: 1 }}>
        <View style={styles.title}>
          <Text h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Success!
          </Text>
          <Text h4 style={{ textAlign: "center" }}>
            You'll receive your cash advance in 1-2 business days
          </Text>
        </View>
        <Animated.View
          style={{
            opacity: animatedOpacity,
            transform: [{ translateX: animatedTransform }],
            marginTop: theme.spacing.unit6x,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 90,
              color: theme.color.blue,
              textAlign: "center",
            }}
          >
            {amountFormatted}
          </Text>
        </Animated.View>
      </View>

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
