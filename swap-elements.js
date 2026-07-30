function swapElements(arr, i, j){
    let a = arr[i];
    arr[i] = arr[j]
    arr[j] = a
    return arr;
}

 module.exports = swapElements