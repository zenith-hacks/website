module.exports = {
	printWidth: 140,
	tabWidth: 3,
	useTabs: false,
	semi: true,
	singleQuote: false,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	jsxBracketSameLine: true,
	arrowParens: 'always',
	rangeStart: 0,
	rangeEnd: Infinity,
	requirePragma: false,
	insertPragma: false,
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'css',
	endOfLine: 'auto',
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
