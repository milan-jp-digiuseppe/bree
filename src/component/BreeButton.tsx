import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Button } from "@rneui/base";
import { theme } from "../theme";
import BreeText from "./BreeText";

interface Props {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const BreeButton: React.FC<Props> = ({ title, onPress, isLoading, style }) => {
  return (
    <Button
      title={
        <BreeText color={theme.color.white} fontSize="h4">
          {title}
        </BreeText>
      }
      onPress={onPress}
      color={theme.color.blue}
      radius={theme.borderRadius}
      loading={isLoading}
      style={style}
    />
  );
};

export default BreeButton;
