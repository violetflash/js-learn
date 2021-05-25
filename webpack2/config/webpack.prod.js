const { merge } = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        path: paths.build,
        publicPath: './',
        filename: 'scripts/[name].[contenthash].bundle.js',
    },
    plugins: [
        // Extracts CSS into separate files
        // Note: style-loader is for development, MiniCssExtractPlugin is for production
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
