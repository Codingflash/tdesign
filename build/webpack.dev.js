const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')
const webpack = require('webpack')

const devConfig = {
    mode:'development',
    
    
}

module.exports = merge(baseConfig,devConfig)