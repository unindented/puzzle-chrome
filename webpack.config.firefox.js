'use strict'

var webpackConfig = require('./webpack.config.factory')

module.exports = webpackConfig({platform: 'firefox'})
