import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { theme } from "../../theme";
import BreeScreenContainer from "../../component/BreeScreenContainer";
import BreeButton from "../../component/BreeButton";
import { Card, PricingCard, Text } from "@rneui/base";
import BreeLogo from "../../component/BreeLogo";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressCashAdvance = useCallback(() => {
    navigation.navigate("CashAdvanceStack");
  }, []);

  return (
    <BreeScreenContainer style={styles.screen}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginHorizontal: theme.spacing.screenPadding,
          marginTop: theme.spacing.unit3x,
        }}
      >
        <Text h2 style={{ fontWeight: "500" }}>
          Welcome, Milan
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
            $500
          </Text>
          <Text style={{ textAlign: "center" }}>Pay back in 14 days</Text>
        </Card>
        <BreeButton
          title="Get Cash Now"
          onPress={onPressCashAdvance}
          style={{
            marginHorizontal: theme.spacing.screenPadding,
            marginBottom: theme.spacing.screenPadding,
          }}
        />
      </View>
    </BreeScreenContainer>
  );
};

export default HomeScreen;
