console.log('123123', process.cwd());

const file = require.content()
console.log(file)


module.exports = (options, ctx) => {
	console.log(options);
	console.log(ctx);
	return {
		name: 'vuepress-sidebar',
		chainWebpack(config) {
			config.resolve.alias.set('@pwd', process.cwd());
		},
		enhanceAppFiles() {

			return {
				name: 'vuepress-sidebar',
				content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(
					
				)} }`,
			};
		},
	};
};
