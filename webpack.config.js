var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool:'eval-cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/frontend/components/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.less$/, loader: "style!css!less"
            }, {
                test: /\.(jpg|png|svg|gif|ttf)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    }
};
