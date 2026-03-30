/** @type {import('prettier').Config} */
export default {
  // Core formatting
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // Object formatting (v3.5+)
  objectWrap: 'preserve',

  // HTML / Vue / JSX
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,

  // Markdown
  proseWrap: 'preserve',

  // Embedded languages
  embeddedLanguageFormatting: 'auto',

  // End of line
  endOfLine: 'lf',

  // Pragma
  requirePragma: false,
  insertPragma: false,
  checkIgnorePragma: false,

  // Experimental (opt-in, may change or be removed)
  experimentalTernaries: false,
  experimentalOperatorPosition: 'end',
}
