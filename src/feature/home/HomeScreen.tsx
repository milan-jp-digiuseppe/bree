import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { theme } from "../../theme";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import BreeButton from "../../component/BreeButton";
import { Card, Text } from "@rneui/base";
import { useHomeQuery } from "./HomeApi";
import { centsToDinero, formatDinero } from "../../utils/money";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: theme.spacing.screenPadding,
    marginTop: theme.spacing.unit3x,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: theme.spacing.screenPadding,
    gap: theme.spacing.unit2x,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();

  const { data, isLoading, isError, refetch } = useHomeQuery();

  const onPressCashAdvance = useCallback(() => {
    // Toast.show({
    //   text1: "Something went wrong",
    // });
    navigation.navigate("CashAdvanceStack");
  }, []);

  if (isLoading) {
    return (
      <BreeScreenContainer style={styles.loading}>
        <ActivityIndicator />
      </BreeScreenContainer>
    );
  }

  if (isError) {
    return (
      <BreeScreenContainer style={styles.error}>
        <Text
          h4
          style={{
            textAlign: "center",
          }}
        >
          Something went wrong. Please try again
        </Text>
        <BreeButton title="Retry" onPress={refetch} />
      </BreeScreenContainer>
    );
  }

  return (
    <BreeScreenContainer style={styles.screen}>
      <Text h2 style={{ fontWeight: "500" }}>
        Welcome, {data!.user.firstName}
      </Text>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title
          h3
          style={{
            color: theme.color.blue,
            fontWeight: "bold",
          }}
        >
          Cash Advance Limit
        </Card.Title>
        <Card.Divider />
        <Text h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          {formatDinero(centsToDinero(data!.cashAdvancePolicy.limit))}
        </Text>
        <Text style={{ textAlign: "center" }}>
          Pay back in {data!.cashAdvancePolicy.paybackDuration} days
        </Text>
      </Card>
      <BreeButton
        title="Get Cash Now"
        onPress={onPressCashAdvance}
        style={{
          marginHorizontal: theme.spacing.screenPadding,
          marginBottom: theme.spacing.screenPadding,
        }}
      />
    </BreeScreenContainer>
  );
};

export default HomeScreen;
