function customFilter(arr, callBack){
    let output = []
    for(let i = 0; i < arr.length; i++){
        if(callBack(arr[i]))
            output.push(arr[i])
    }
    return output;
}
 module.exports = customFilter