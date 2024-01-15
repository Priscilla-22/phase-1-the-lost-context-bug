const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-\s']/g, '');
  }
  static titleize(str) {
    const commonWords = new Set([
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from',
    ]);

    const words = str.split(/\b/);
    const titleizedString = words
      .map((word, index) => {
        return index === 0 || !commonWords.has(word.toLowerCase())
          ? Formatter.capitalize(word)
          : word.toLowerCase();
      })
      .join('');

    return titleizedString;
  }
}

console.log(Formatter.capitalize('happy birthday, odin one-eye!'));
console.log(Formatter.sanitize( "Thor\" \"Admiration, respect, and love"));
const titleizedString = Formatter.titleize(
  'From Asgard to Nifelheim, you\'re the best all-father ever.\n\nLoveer the lazy dog'
);
