const isProd = process.argv.includes('--production');
const isDev = !isProd;


module.exports = {
	configureWebpack: {
		devtool: 'source-map'
	},
	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd
	},
	webpack: {
		mode: isProd ? "production" : "development",
	},
	imagemin: {
		verbose: true
	},
	fonter: {
		formats: ["ttf", "woff", "eot", "svg"]
	}
}