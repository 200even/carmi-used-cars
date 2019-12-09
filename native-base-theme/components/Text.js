// @flow

import variable from "../variables/platform";

export default (variables /* : * */ = variable) => {
  return {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    }
  };
};
