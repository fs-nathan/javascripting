function mergeObjects(obj1, obj2){
    // su dung ham assign de copy hoac gop 2 ob
    // vd 
    // ob1{a:1 b:3}
    // ob2{a-2 c-4} se gop 2 ob do a2 xuat hien sau nen se ghi de 
    return Object.assign({}, obj1, obj2);
}
module.exports = mergeObjects;