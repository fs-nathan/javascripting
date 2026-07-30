function isAnagram(str1, str2) {
  // Định nghĩa sapXepChuoi là một hàm (function) nhận vào chuỗi 'str'
  const sapXepChuoi = (str) => {
    return str
      .toLowerCase()    
      .replace(/\s+/g, '')  
      .split('')            
      .sort()               
      .join('');            
  };

  return sapXepChuoi(str1) === sapXepChuoi(str2);
}

module.exports = isAnagram;