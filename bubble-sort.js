function bubbleSort(arr) {
  const n = arr.length;

  // Vòng lặp thứ nhất: Duyệt qua toàn bộ số lượt cần sắp xếp
  for (let i = 0; i < n; i++) {
    
    // Vòng lặp thứ hai: So sánh các cặp phần tử đứng cạnh nhau
    // j chạy đến n - i - 1 vì các phần tử cuối cùng đã được sắp xếp đúng chỗ rồi
    for (let j = 0; j < n - i - 1; j++) {
      
      // Nếu phần tử trước lớn hơn phần tử sau -> Hoán đổi (Swap)
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Trả về mảng đã được sắp xếp xong
  return arr;
}

// Export hàm theo đúng yêu cầu đề bài
module.exports = bubbleSort;