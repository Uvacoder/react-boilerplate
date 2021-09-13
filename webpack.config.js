const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:
    {
        rules:  
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                exclude: /node_modules/,
                use: [{
                        loader: 'url-loader',
                        options: {limit: 10000}
                }]
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin(
           {
               template: path.join(__dirname,'/index.html')
            }
        )
    ]
 }
