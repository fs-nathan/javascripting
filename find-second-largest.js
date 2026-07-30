function findSecondLargest(arr) {
  // Khởi tạo max1 và max2 với giá trị nhỏ nhất có thể (Infinity âm)
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > max1) {
      max2 = max1; //
      max1 = num;  //
    } else if (num < max1 && num > max2) {
      max2 = num;  // 
    }
  }

  return max2;
}
module.exports = findSecondLargest;