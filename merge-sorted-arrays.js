function mergeSortedArrays(arr1, arr2) {
    let kq = [];
    let a1 = arr1;
    let a2 = arr2;

    while (a1.length > 0 && a2.length > 0) {
        if (a1[0] < a2[0]) {
            kq.push(a1[0]);
            a1 = a1.slice(1);
        } else {
            kq.push(a2[0]);
            a2 = a2.slice(1);
        }
    }

    return kq.concat(a1).concat(a2);
}

module.exports = mergeSortedArrays;