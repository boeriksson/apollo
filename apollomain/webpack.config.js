const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, './src/index.js')],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'main.js',
        chunkFilename: '[name].chunk.js',
        library: 'main',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2017', 'react'],
                    plugins: [
                        'transform-class-properties',
                        'transform-async-to-generator'
                    ]
                }
            },
            {
                test: /\.js[x]?$/,
                loader: 'string-replace-loader',
                exclude: /node_modules/,
                query: {
                    multiple: [
                        {search: /INNER_THEME/g, replace: 'unibet'},
                        {search: /BASE_THEME/g, replace: 'ThemeUnibet'}
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            './src'
        ]
    }
};
