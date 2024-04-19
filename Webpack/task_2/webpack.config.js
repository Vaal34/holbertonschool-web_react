const path = require('path')
module.exports = {
	mode: 'production',
  	entry: "./js/dashboard_main.js",
  	output: {
  		filename:'bundle.js',
        path: path.resolve(__dirname, 'public')
  	},
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif|gif|svg)$/,
                use: ["file-loader"]
            }
        ],
    },
	devServer: {
		port: 8465
	},
};