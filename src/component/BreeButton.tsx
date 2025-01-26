import React, { PropsWithChildren } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import BreeText from "./BreeText";
import { Button, Text } from "@rneui/base";
import { theme } from "../theme";

const styles = StyleSheet.create({
  //
});

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
        <Text h4 style={{ color: theme.color.white }}>
          {title}
        </Text>
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
