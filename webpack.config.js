const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'development',
    entry: {
      bundle: path.resolve(__dirname, './client/index.tsx') 
    },
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name][contenthash].js',
      clean: true
    },
    
    devtool: "eval-source-map",
    module: {
      rules:[
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',    // Transpile modern JavaScript
              ['@babel/preset-react', {"runtime": "automatic"}],  // Transpile React JSX
              '@babel/preset-typescript'
            ]
          }
        }
      },
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options : {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
  
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']  // Added this to ensure proper resolution of file types
    },
  
    devServer: {
      host: 'localhost',
      open: true,
      compress: true,
      // enable HMR on the devServer
      hot: true,
      // fallback to root for other urls
      historyApiFallback: true,
  
      static: {
        // match the output path
        directory: path.resolve(__dirname, 'dist'),
        // match the output 'publicPath'
        publicPath: '/',
      },
  
      headers: { 'Access-Control-Allow-Origin': '*' },
      /**
       * proxy is required in order to make api calls to
       * express server while using hot-reload webpack server
       * routes api fetch requests from localhost:8080/api/* (webpack dev server)
       * to localhost:3000/api/* (where our Express server is running)
       */
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000/',
          changeOrigin:true, 
          secure: false,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
       title: 'Development',
       template: './client/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: './client/style.css', to: 'style.css' }  // This copies your CSS file to 'dist'
        ]
      }),
      // new BundleAnalyzerPlugin(),
    ],
  };   