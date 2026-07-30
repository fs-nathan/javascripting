function classifyGrade(score){
    if(score >= 8.5){
        return "Giỏi"
    }
    else if(score >= 7.0 && score < 8.5)
        return "Khá"
    else if(score >= 5.0 && score < 7.0)
        return "Trung bình"
    else
        return "Yếu"
}
     module.exports = classifyGrade