const path = require('path');
module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [__dirname, './src/assets/common/global.less']
    }
  }
}
