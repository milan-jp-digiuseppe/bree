import { Divider, Text } from "@rneui/base";
import { theme } from "../theme";
import { View } from "react-native";

interface Props {
  title: string;
}

const BreeSectionTitle: React.FC<Props> = ({ title }) => (
  <View style={{ marginTop: theme.spacing.unit3x }}>
    <Text h4 style={{ fontWeight: "bold" }}>
      {title}
    </Text>
    <Divider style={{ marginBottom: theme.spacing.unit }} />
  </View>
);

export default BreeSectionTitle;
