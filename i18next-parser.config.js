// https://qiita.com/ShortArrow/items/dc109492b87a1c07f70b#%E5%86%8D%E3%81%B3%E3%81%AEextract
// ./node_modules/.bin/i18next src/**/*.{tsx}
// https://zenn.dev/terrierscript/articles/2021-07-13-i18n#1.-%E6%96%87%E8%A8%80%E3%83%99%E3%83%BC%E3%82%B9%E3%81%A7%E3%81%AA%E3%81%8Fkey%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AB%E3%81%97%E3%81%A6%E3%80%81%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4%E3%81%AB%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%82%92%E5%9F%8B%E3%82%81%E8%BE%BC%E3%82%80

module.exports = {
  locales: ['en', 'ja'],
  output: './src/locales/$LOCALE/$NAMESPACE.json',

  ts: [
    {
      lexer: 'JavascriptLexer',
      functions: ['t'], // Array of functions to match
      functionsNamespace: ['useTranslation', 'withTranslation'], // Array of functions to match for namespace
    },
  ],
  tsx: [
    {
      lexer: 'JsxLexer',
      attr: 'i18nKey', // Attribute for the keys
    },
  ],
};
