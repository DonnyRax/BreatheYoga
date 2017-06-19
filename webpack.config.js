var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories:[
			'node_modules',
			'./app/styles',
			'./app/components' //Folder to look at for auto-alias
		],
    alias: {
      Main: 'app/components/Main.jsx',
      Header: 'app/components/Header.jsx',
			Nav: 'app/components/Nav.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, 
			{
				test: /\.css$/, 
        			loader: "style-loader!css-loader" 
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/, 
        		loader: "url" 
			}
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
