function romanToInt(s) {
    // 1. Định nghĩa bảng tra cứu giá trị số La Mã
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // 2. Duyệt qua từng ký tự của chuỗi s
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]];
        const nextValue = romanValues[s[i + 1]]; // Sẽ là undefined ở ký tự cuối cùng

        // 3. So sánh ký tự hiện tại và ký tự tiếp theo
        if (nextValue && currentValue < nextValue) {
            total -= currentValue; // Trừ nếu nhỏ hơn ký tự sau
        } else {
            total += currentValue; // Cộng nếu lớn hơn hoặc bằng (hoặc là ký tự cuối)
        }
    }

    return total;
}

// Export hàm để hệ thống chấm bài nhận diện được
module.exports = romanToInt;