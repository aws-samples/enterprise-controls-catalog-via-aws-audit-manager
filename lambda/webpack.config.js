/* eslint-disable */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts',
    },
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'production',
    target: 'node',
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/lambda/dist'),
        libraryTarget: 'commonjs',
    },
};
