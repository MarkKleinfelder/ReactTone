const path = require ('path');



module.exports = {
  node: {
    fs: "empty",
    net: "empty"
  },
	entry: path.join(__dirname, '/client/src/App.jsx'),
	output: {
		path: path.join(__dirname, '/client/dist/js'),
		filename:'index_bundle.js'
	},
	module: {
		loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
	},
  watch: true
}