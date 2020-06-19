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
    //配置eslint语法规则，0通过，1警告但是可以提交，2报错不允许commit
    "no-console":2,
	},
};
