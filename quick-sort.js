function quickSort(arr) {
  // Điều kiện dừng của đệ quy: Nếu mảng chỉ có 0 hoặc 1 phần tử thì không cần xếp nữa
  if (arr.length <= 1) {
    return arr;
  }

  // 1. Tìm vị trí ở giữa và lấy phần tử Pivot (chuẩn) ra khỏi mảng
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  // 2. Phân loại các phần tử còn lại vào 2 mảng left và right
  for (let i = 0; i < arr.length; i++) {
    // Bỏ qua chính phần tử pivot đã chọn
    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      left.push(arr[i]);  // Nhỏ hơn pivot thì sang trái
    } else {
      right.push(arr[i]); // Lớn hơn hoặc bằng pivot thì sang phải
    }
  }

  // 3. Đệ quy sắp xếp mảng left, mảng right rồi dùng concat nối chúng lại với nhau
  return quickSort(left).concat([pivot], quickSort(right));
}

// Export hàm theo đúng yêu cầu đề bài
module.exports = quickSort;