import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { theme } from "../../theme";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import BreeButton from "../../component/BreeButton";
import { Card } from "@rneui/base";
import { useHomeQuery } from "./HomeApi";
import { centsToDinero, formatDinero } from "../../utils/money";
import BreeText from "../../component/BreeText";

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
    navigation.navigate("CashAdvanceStack");
  }, [navigation]);

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
        <BreeText fontSize="h4" textAlign="center">
          Something went wrong. Please try again
        </BreeText>
        <BreeButton title="Retry" onPress={refetch} />
      </BreeScreenContainer>
    );
  }

  return (
    <BreeScreenContainer style={styles.screen}>
      <BreeText fontSize="h3" fontWeight="medium">
        Welcome, {data!.user.firstName}
      </BreeText>
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
        <BreeText fontSize="h2" fontWeight="bold" textAlign="center">
          {formatDinero(centsToDinero(data!.cashAdvancePolicy.limit))}
        </BreeText>
        <BreeText textAlign="center">
          Pay back in {data!.cashAdvancePolicy.paybackDuration} days
        </BreeText>
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
