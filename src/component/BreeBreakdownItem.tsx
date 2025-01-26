import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { theme } from "../theme";
import BreeText from "./BreeText";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: theme.spacing.unit,
  },
  subItem: {
    marginLeft: theme.spacing.screenPadding,
    paddingBottom: 0,
  },
});

interface Props {
  label: string;
  value: string;
  subItems?: Props[];
  style?: StyleProp<ViewStyle>;
}

const BreeBreakdownItem: React.FC<Props> = ({
  label,
  value,
  subItems,
  style,
}) => {
  return (
    <View style={style}>
      <View style={styles.row}>
        <BreeText fontSize="h4">{label}</BreeText>
        <BreeText fontSize="h4" fontWeight="bold">
          {value}
        </BreeText>
      </View>
      {!!subItems && subItems.length > 0 && (
        <>
          {subItems.map((item) => (
            <BreeBreakdownItem
              key={item.label}
              {...item}
              style={styles.subItem}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default BreeBreakdownItem;
