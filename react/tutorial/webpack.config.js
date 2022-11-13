const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
	port: 7777,
	contentBase: path.join(__dirname, 'public')
    },
    module: {
        loaders: [
	    {
	        test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		query: {
		    cacheDirectory: true,
		    presets: ['es2015', 'react']
		}
            }
	]
    }
};

module.exports = config;
