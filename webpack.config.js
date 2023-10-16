const path = require('path')

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',       
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },
    module: {
        rules: [
            {
            // test: /\.jsx?$/,
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: ['babel-loader'],
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
            },

            {
            // test: /\.jsx?$/,
            test: /\.(.js|.jsx)$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['js', 'jsx']
    }
}