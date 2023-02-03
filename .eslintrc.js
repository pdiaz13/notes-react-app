module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint:recommended',
		'eslint-config-prettier',
		'plugin:react-hooks/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/prop-types': 'off',
	},
};
