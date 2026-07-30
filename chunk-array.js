function chunkArray(arr, size){
    let kq = [];
    let arr1 = arr;
    while(arr1.length >= size){
        let x = arr1.slice(0, size)
        kq.push(x);
        arr1= arr1.slice(size)
    }
    if(arr1.length > 0){
        kq.push(arr1);
    }
    return kq;
}
 module.exports = chunkArray