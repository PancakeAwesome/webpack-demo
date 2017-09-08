var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {	
	// the door file of webpack packaging
	// entry: './src/script/main.js',
	// entry: ['./src/script/main.js','./src/script/a.js'],
	entry: __dirname + '/src/app.js',
	output: {
		/**
		 * __dirname: absolute file path
		 * @type {[type]}
		 */
		path:__dirname + '/dist',
		/**
		 * [name]: entry's chunck's key
		 * [chunkhash]: file's md5 value(file version)
		 * @type {String}
		 */
		filename: 'js/[name].bundle.js',
	},
	/**
	 * webpack loader param
	 * @type {Object}
	 */
	module: {
		rules: [
			// html loader
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			// ejs loader (template loader)
			{
				test: /\.tpl$/,
				loader: 'ejs-loader'
			},
			// js loader
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname,'src'),
				// exclude: __dirname + './node_modules/',
				exclude: path.resolve(__dirname,'node_modules'),
				// param of loader
				options: {
					presets: ['env']
				}
			},
			// css loader : postcss-loader,css-loader,style-loader
			{
        test: /\.css$/,
        use: [
	        {
	      		loader:'style-loader'
	      	},
	      	{
	        	loader:'css-loader'
	      	},
	      	{ 
	      		loader: 'postcss-loader',
	      		// some plugins of postcss-loader:some options
	      		options: {
	      			plugins: function () {
	      				return [
	      					require('postcss-import')({
	      						root:this.resourcePath
	      					}),
	      					require('autoprefixer')({
	      						broswers: ['last 5 versions']
	      					})
      					]
	      			}
	    			}
	    		}
    		]	
      },
      // less loader
      {
        test: /\.less$/,
        use: [
        	{
            loader: "style-loader" // creates style nodes from JS strings 
          }, 
          {
          	loader: "css-loader" // translates CSS into CommonJS 
	    		},
	    		{ 
	      		loader: 'postcss-loader',
	      		// some plugins of postcss-loader:some options
	      		options: {
	      			plugins: function () {
	      				return [
	      					require('postcss-import')({
	      						root:this.resourcePath
	      					}),
	      					require('autoprefixer')({
	      						broswers: ['last 5 versions']
	      					})
      					]
	      			}
	    			}
	    		},
	    		{
         		loader: "less-loader" // compiles Less to CSS 
	       	}
       	]
      },
      // sass loader
      {
        test: /\.scss$/,
        use: [
        	{
            loader: "style-loader" // creates style nodes from JS strings 
          }, 
          {
          	loader: "css-loader" // translates CSS into CommonJS 
	    		},
	    		{ 
	      		loader: 'postcss-loader',
	      		// some plugins of postcss-loader:some options
	      		options: {
	      			plugins: function () {
	      				return [
	      					require('postcss-import')({
	      						root:this.resourcePath
	      					}),
	      					require('autoprefixer')({
	      						broswers: ['last 5 versions']
	      					})
      					]
	      			}
	    			}
	    		},
	    		{
         		loader: "sass-loader" // compiles sess to CSS 
	       	}
       	]
      },
			// picture loader
			{
				test: /\.(png|jpg|gif|svg)$/,
				loaders: [
					// 'file-loader?name=assets/[name]-[hash:5].[ext]',
					'url-loader?limit=200000&name=assets/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			},
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			injecet: 'body'
		})
	]
}