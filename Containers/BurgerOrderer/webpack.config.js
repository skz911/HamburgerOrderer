const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  
      filename: 'index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader'], 
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', 
              outputPath: 'assets/images', 
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: [{
      directory: path.join(__dirname, 'dist'), 
    },
    {
      directory: path.join(__dirname, 'public'), 
      publicPath: '/', 
    },
    ],
    compress: true, 
    port: 3000, 
    open: true, 
    historyApiFallback: true,  
  },
};
