function findLongestWord(str) {
  const words = str.split(' ');
  
  if (words.length === 0 || words[0] === '')
        return '';

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

module.exports = findLongestWord;