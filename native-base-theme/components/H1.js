// @flow

import variable from "../variables/platform";

export default (variables /* : * */ = variable) => {
  return {
    color: variables.textColor,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1
  };
};
