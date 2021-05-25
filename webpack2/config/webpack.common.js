const PATH = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const paths = require('./paths');

module.exports = {

    // Where webpack looks to start building the bundle
    context: PATH.resolve(__dirname, '../src/'),
    entry: {
        index: ['./js/index.js'],
        // index: ['./js/index.js', './styles/style.scss', './index.html'],
        // about: ['./about/about.js', './about/about.scss', './about/about.html'],
    },

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: './',
    },

    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            title: 'Home',
            // favicon: PATH.resolve(paths.src, 'images/favicon.ico'),
            template: PATH.resolve(__dirname, '../src/index.html'), // template file
            filename: 'index.html', // output file,
            chunks: ['index'],
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            // JavaScript: Use Babel to transpile JavaScript files
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

            // Styles: Inject CSS into the head with source maps
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },

            // Images: Copy image files to build folder
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash].min[ext]',
                },
                use: [
                    {
                        loader: ImageminPlugin.loader,
                        options: {
                            bail: false,
                            cache: false,
                            imageminOptions: {
                                plugins: [
                                    ['pngquant', { quality: [0.5, 0.5] }],
                                    ['mozjpeg', { quality: 50, progressive: true }],
                                    ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
                                    [
                                        'svgo',
                                        {
                                            plugins: [{ removeViewBox: false }],
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },

            // Fonts: Copy fonts files to build folder
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
            // SVGs: Copy SVGs files to build folder
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/svg/[hash][ext]',
                },
            },
        ],
    },
};
