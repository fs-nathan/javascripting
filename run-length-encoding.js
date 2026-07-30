function runLengthEncoding(str) {
  if (!str) return ""; // Phòng trường hợp chuỗi rỗng

  let result = "";
  let count = 1; // Bắt đầu đếm từ 1 cho ký tự đầu tiên

  for (let i = 0; i < str.length; i++) {
    // So sánh ký tự hiện tại với ký tự kế tiếp
    if (str[i] === str[i + 1]) {
      count++; // Nếu giống nhau thì tăng biến đếm
    } else {
      // Nếu khác nhau (loạt ký tự lặp đã kết thúc)
      result += str[i] + count; // Nối ký tự và số lượng đếm được vào kết quả
      count = 1; // Reset lại máy đếm về 1 cho ký tự mới
    }
  }

  return result;
}

module.exports = runLengthEncoding;