const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

console.log(CleanWebpackPlugin)

module.exports = {
    entry : ['./src/main.jsx'],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.main[hash].js',
        publicPath : '/'

    },
    resolve: {
        alias: {
            "components" : path.join(__dirname, "src/components"),
            "views" : path.join(__dirname, "src/views"),
            "sections" : path.join(__dirname, "src/sections"),
        }
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },{
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },{
                test: /\.(svg|png|jpg|jpeg|gif|otf|ttf|pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name][hash].[ext]',
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(),

    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        proxy: {
            '/mailers': {
                target: 'https://web-utils.waveapplication.com',
                changeOrigin: true

            }
        },
        historyApiFallback: true,
    }
};