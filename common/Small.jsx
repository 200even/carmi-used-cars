/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Text } from "native-base";
import commonColor from "../native-base-theme/variables/commonColor";

export const Small = props => (
  <Text
    {...props}
    style={[props.style, { fontSize: commonColor.fontSizeSmall }]}
  >
    {props.children}
  </Text>
);
