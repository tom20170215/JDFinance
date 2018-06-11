const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './app/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),//热更新
  ];
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        } //json格式
      }),
      new ExtractTextPlugin("style.css", {
        ignoreOrder: true
      }),
      new UglifyJsPlugin({
        sourceMap: true
      })
    )
  }
  return {
    entry: [
      './app/js/main.js',
      './app/js/viewport.js'
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000,
    },
    module: {
      rules: [{
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cssModules: {
            localIdentName: '[path][name]---[local]---[hash:base64:5]',
            camelCase: true,
            modules:true
          },
          extractCSS: true,
          loaders: env.production ? {
            css: ExtractTextPlugin.extract({
              use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
              fallback: 'vue-style-loader'
            })
          } : {
            css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
            scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
          }
        }
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ], //使用的扩展名
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      } //指定完整版的vue版本
    },
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};