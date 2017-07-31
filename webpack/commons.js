const path = require('path');
/**
 * webpack配置中其他公用
 */
module.exports = {
  resolve: {
    extensions: [".js"],
    alias: {
      components: path.resolve(__dirname, '../src/components')
    }
  }
};