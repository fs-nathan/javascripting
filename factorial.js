function factorial(n){
    let gt = 1;
    for(let i = 1; i <= n; i++){
        gt*=i;
    }
    return gt;
}
 module.exports = factorial
