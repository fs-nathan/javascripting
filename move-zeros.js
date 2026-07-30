function moveZeros(arr){
    const nonZeros = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num ===0);

    // ham concat noi 2 mang vi du o day moveZeros mang to se 1 mang de loc so 0 
    // ham kia la so 0
    return nonZeros.concat(zeros);
}
 module.exports = moveZeros