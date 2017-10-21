// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 2,
    "comma-dangle": [1, "always-multiline"],
    "semi": [1, "never"],
    "space-before-function-paren": [1, "never"],
    "quotes": 0,
    "no-multiple-empty-lines": 0,
    "indent": [1, "tab", { "SwitchCase": 1 }],
    "no-tabs": 0,
	}
}

