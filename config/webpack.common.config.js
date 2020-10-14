const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../sources/src/index.js'),
    framework: ['react', 'react-dom']
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, '../node_modules')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 8192
          }
        }
      },

         
        // }
        // use: [
        //   {
        //     loader:'file-loader',
        //     options:{
        //         name:'[name].[ext]',  //[path] 上下文环境路径
        //         publicPath:'./assets/image/',    //公共路径
        //         outputPath:'assets/image/',  //输出路径                         
        //       }
        //   },
        //   {
        //       loader: 'image-webpack-loader',
        //       options: {
        //           bypassOnDebug: true, // webpack@1.x
        //           disable: true,       // webpack@2.x and newer
        //       },
        //   },
        // ]
      // },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/'
          }
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
}