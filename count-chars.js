function countChars(str) {

  const charMap = {};


  for (let char of str) {
    if (charMap[char]) {

      charMap[char]++;
    } else {

      charMap[char] = 1;
    }
  }


  return charMap;
}


module.exports = countChars;