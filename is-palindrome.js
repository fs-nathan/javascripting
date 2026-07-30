function isPalindrome(str) {

  const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
  

  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}

module.exports = isPalindrome;