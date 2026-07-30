function multiplicationTable(n){
    let arr = [];
    for (let i = 1; i <= 10; i++){
        arr.push(`${n} x ${i} = ${n*i}`)
    }
    return arr;
}
     module.exports = multiplicationTable