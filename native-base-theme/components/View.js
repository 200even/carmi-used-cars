// @flow

import variable from "../variables/platform";

export default (variables /* : * */ = variable) => {
  return {
    ".padder": {
      padding: variables.contentPadding
    }
  };
};
