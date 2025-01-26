import { Divider } from "@rneui/base";
import { theme } from "../theme";
import { View } from "react-native";
import BreeText from "./BreeText";

interface Props {
  title: string;
}

const BreeSectionTitle: React.FC<Props> = ({ title }) => (
  <View style={{ marginTop: theme.spacing.unit3x }}>
    <BreeText fontSize="h4" fontWeight="bold">
      {title}
    </BreeText>
    <Divider style={{ marginBottom: theme.spacing.unit }} />
  </View>
);

export default BreeSectionTitle;
