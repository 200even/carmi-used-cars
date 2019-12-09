// @flow

import variable from "../variables/platform";

export default (variables /* : * */ = variable) => {
  return {
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2
  };
};
