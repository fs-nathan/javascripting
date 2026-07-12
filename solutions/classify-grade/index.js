function classifyGrade (score) {
  if (score >= 8.5) return 'Giỏi'
  if (score >= 7.0) return 'Khá'
  if (score >= 5.0) return 'Trung bình'
  return 'Yếu'
}

module.exports = classifyGrade
