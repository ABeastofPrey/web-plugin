const webpack = require('webpack');
const ZipPlugin = require('zip-webpack-plugin');
module.exports = {
    output: {
        filename: '[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        }),
        new ZipPlugin({
            filename: 'plugin.zip',
            include: ['main.js', 'polyfills.js'],
        })
    ]
}