const path = require('path');

module.exports = [
	"cheap-module-source-map"
].map(devtool => ({
	mode: "development",
      entry: './src/app.js',
      output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
      },
      resolve: {
            fallback: { crypto: false },
        },
      module: {
            rules: [{
                  loader: 'babel-loader',
                  test: /\.js$/,
                  exclude: /node_modules/
            }, {
                  test: /\.s?css$/,
                  use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                  ]
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            }]
      },
      devtool,
      devServer: {
            static: {
                  directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
            historyApiFallback: true,
      }
}));

