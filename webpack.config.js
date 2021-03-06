const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public/build');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  mode: 'development',
  entry: {
    main: `${APP_DIR}/index.js`,
  },
  // devServer: {
  //   contentBase: BUILD_DIR,
  //   compress: true,
  //   port: 9000,
  // },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
    ],
  },
};
