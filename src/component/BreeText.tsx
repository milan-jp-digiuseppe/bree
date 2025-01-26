import { Text } from "@rneui/base";
import React, { PropsWithChildren } from "react";
import { TextStyle } from "react-native";

type BreeFontSize = "h1" | "h2" | "h3" | "h4" | "text";
type BreeFontWeight = "normal" | "medium" | "bold";

const fontSizeMap: Record<BreeFontSize, TextStyle["fontSize"]> = {
  h1: 64,
  h2: 48,
  h3: 32,
  h4: 24,
  text: 16,
};

const fontWeightMap: Record<BreeFontWeight, TextStyle["fontWeight"]> = {
  normal: "normal",
  medium: "500",
  bold: "bold",
};

interface Props {
  fontSize?: BreeFontSize;
  fontWeight?: BreeFontWeight;
  color?: string;
  textAlign?: TextStyle["textAlign"];
}

const BreeText: React.FC<PropsWithChildren<Props>> = ({
  fontSize = "text",
  fontWeight = "normal",
  color = "black",
  textAlign = "left",
  children,
}) => {
  return (
    <Text
      style={{
        color,
        textAlign,
        fontSize: fontSizeMap[fontSize],
        fontWeight: fontWeightMap[fontWeight],
      }}
    >
      {children}
    </Text>
  );
};

export default BreeText;
