function getTopStudent (students) {
  let top = students[0]
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > top.score) top = students[i]
  }
  return top.name
}

module.exports = getTopStudent
