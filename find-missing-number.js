function findMissingNumber(arr, n){
    const tongDaySo = (n*(n+1)/2);
    let tongDaySoHienTai = 0;
    for(let i = 0; i < arr.length; i++){
        tongDaySoHienTai += arr[i];
    }
    return tongDaySo - tongDaySoHienTai
}
module.exports = findMissingNumber