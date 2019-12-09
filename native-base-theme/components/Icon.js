// @flow

import variable from "../variables/platform";

export default (variables /* : * */ = variable) => {
  return {
    fontSize: variables.iconFontSize,
    color: variable.textColor
  };
};
