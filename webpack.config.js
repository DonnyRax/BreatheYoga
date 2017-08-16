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
      Home: 'app/components/Home.jsx',
      About: 'app/components/About.jsx',
      Yoga: 'app/components/Yoga.jsx',
      Testimonials: 'app/components/Testimonials.jsx',
      ContactMe: 'app/components/ContactMe.jsx',
      Footer: 'app/components/Footer.jsx',
      Gallery: 'app/components/Gallery.jsx',
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
        test: /\.(jpeg|png|gif|svg)$/i, 
        loader: "file-loader?name=/public/content/icons/[name].[ext]"
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
