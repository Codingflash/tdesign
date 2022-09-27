const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')        // 把打包后的文件直接注入到html模板中
 
const prodConfig = {
   mode:'production',
    module: {
        
    }
}

module.exports = merge(baseConfig,prodConfig)