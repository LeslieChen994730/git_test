module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	env: {
		browser: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['prettier', 'plugin:vue/essential'],
	// required to lint *.vue files

	// using 'html' plugin will alert: "warning  Delete `⏎`  prettier/prettier"
	plugins: ['vue','prettier'],
	// add your custom rules here
	rules: {
		'prettier/prettier': ['error'],
	},
};
