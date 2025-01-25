import { Text } from "@rneui/base";
import React, { PropsWithChildren } from "react";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4";
  color?: string;
}

const BreeText: React.FC<PropsWithChildren<Props>> = ({
  variant = "h3",
  color = "black",
  children,
}) => {
  return <Text style={{ color }}>{children}</Text>;
};

export default BreeText;
