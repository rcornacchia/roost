const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    injecT: 'body'
});

module.exports = {
    entry: {
        content: './src/index.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader?sourceMap"]
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(jsx|js)?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?name=assets/[name]-[hash:6].[ext]&limit=100000'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devtool: 'source-map'
}