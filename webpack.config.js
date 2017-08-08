const  path = require('path');
const  webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
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
       */
      SampleReducer: path.resolve(__dirname, 'src/reducers/sample_reducer.js'),

      /**
       * Action alias here 
       * For example:
       */
      SampleActions: path.resolve(__dirname, 'src/actions/sample_actions.js'),

      /**
       * Component/Dumb Components alias here
       * For example: 
       */        
      App: path.resolve(__dirname, 'src/components/App.jsx'),

      /**
       * Containers/Smart  Components alias here
       * For example: 
       */ 
      SmartComponent: path.resolve(__dirname, 'src/containers/SmartComponent.jsx')
      
    },
    /**
     * When you are in theproduction branch, comment the following lines 
     * of devtool so as to prevent throwing errorwhile building the bundle for production
     */
     devtool: 'cheap-module-eval-source-map'
  }
}