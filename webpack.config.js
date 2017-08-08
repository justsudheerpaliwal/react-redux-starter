const  path = require('path');
const  webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname, 'public/')
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ] 
  },
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin()//Merging chunks
  ],
  resolve: {
    alias: {
      /**
       * If you want to further reduce the bundle size
       * You can use preact and preact compact as an alias for react and react and react-dom
       * Uncomment the following lines :
       */

      // react: 'preact-compat',
      // 'react-dom': 'preact-compat'

      /**
       * Reducers alias here 
       * For example:
       * bookReducers: path.resolve(__dirname, 'client/reducers/bookReducers.js')
       */

      /**
       * Action alias here 
       * For example:
       * bookActions: path.resolve(__dirname, 'client/actions/bookActions.js')
       */

      /**
       * Component and Container alias here
       * For example: 
       * Book: path.resolve(__dirname, 'client/components/Book.jsx')
       */        
    },
    /**
     * When you are in theproduction branch, comment the following lines 
     * of devtool so as to prevent throwing errorwhile building the bundle for production
     */
     devtool: 'cheap-module-eval-source-map'
  }
}