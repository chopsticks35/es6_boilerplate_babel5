const path = require('path')

module.exports = {
	frameworks: ['jasmine'],
	reporters: ['progress', 'coverage'],
	coverageReporter: {
		reporters: [
			{ type: 'text-summary' },
			{ type: 'lcov'},
      { type: 'text'}
		]
	},
	colors: true,
	autoWatch: false,
	browsers: ['PhantomJS'],
	browserNoActivityTimeout: 120000,
	captureTimeout:           120000, // the build process tends to take a while
	singleRun: true,
	files: [
		'./node_modules/phantomjs-polyfill/bind-polyfill.js',
		'./node_modules/babel-core/browser-polyfill.js',
		'./test/test.es6'
	],
	preprocessors: {
		'./test/test.es6': ['webpack', 'sourcemap']
	},
	webpack: {
		context: path.join(__dirname, 'src'),
		devtool: 'inline-source-map',
		module: {
			preLoaders: [
				{
					test:    /\.es6/,
					exclude: /(test|node_modules)\//,
					loader:  'isparta-instrumenter'
				}
			],
			loaders: [
      	{ test: /\.coffee$/, loaders: ['coffee'] },
				{ test: /\.es6$/, loaders: ['babel?compact=true'] }
			]
		},
		resolve: {
		  root: [
		    path.join(__dirname, 'src')
		  ],
		  extensions: ['', '.coffee', '.es6', '.js']
		}
	},
	webpackServer: {
		noInfo: true
	}
}
