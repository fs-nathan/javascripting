function sumOfOdds(n){
    let tong = 0;
    for(let i = 1; i <= n; i++){
        if(i % 2 == 1){
            tong += i
        }
    }
    return tong;
}
 module.exports = sumOfOdds