function getTopStudent(students){
    if(students.length ===0)
        return "";
    let topStudent = students[0];
    for(let i =1; i < students.length; i++){
        if(students[i].score > topStudent.score){
            topStudent = students[i]
        }
    }
    return topStudent.name;
}
module.exports = getTopStudent;