const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Detect environment (production or development)
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development', // Use production optimizations if in production
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
      ...(isProduction ? [] : [new BundleAnalyzerPlugin()]), // Only use BundleAnalyzer in dev mode
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
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-dom$': 'react-dom/profiling',
      }
    },
    devServer: {
      static: [{
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      }],
      compress: true,
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
};
