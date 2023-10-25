const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginVite = require("@11ty/eleventy-plugin-vite");

module.exports = function(ec) {
	ec.setWatchThrottleWaitTime(100)
	ec.addPlugin(pluginWebc, {
		components: [
			'src/components/*.webc',
		],
	});
	ec.addPlugin(pluginVite, {
		tempFolderName: '.11ty-vite',
		serverOptions: {
			domDiff: false
		}
	})

	ec.addPassthroughCopy('LICENSE')
	ec.addPassthroughCopy('manifest.json')

	return {
		htmlTemplateEngine: false,
		dataTemplateEngine: false,
		markdownTemplateEngine: false,
		passthroughFileCopy: true,

		dir: {
			input: 'src', // relative to where the cwd is
				data: '../data', // relative to dir.input
				includes: '../components', // relative to dir.input
				layouts: '../components', // relative to dir.input
			output: 'plugin' // relative to where the cwd is
		}
	}
};
