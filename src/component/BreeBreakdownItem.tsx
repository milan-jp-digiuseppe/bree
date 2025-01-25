import { Text } from "@rneui/base";
import { StyleProp, View, ViewStyle } from "react-native";
import { theme } from "../theme";

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: theme.spacing.unit,
        }}
      >
        <Text h4>{label}</Text>
        <Text h4 style={{ fontWeight: "bold" }}>
          {value}
        </Text>
      </View>
      {!!subItems && subItems.length > 0 && (
        <>
          {subItems.map((item) => (
            <BreeBreakdownItem
              key={item.label}
              {...item}
              style={{
                marginLeft: theme.spacing.screenPadding,
                paddingBottom: 0,
              }}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default BreeBreakdownItem;
