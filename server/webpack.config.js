const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production', // Set to 'development' for development mode
  entry: './server.js', // Your entry point
  target: 'node', // Target environment
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
    publicPath: '/dist/', // Public URL of the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'source-map', // Generate source maps for debugging
};
