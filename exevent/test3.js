// tao mang anh
const images = ["https://picsum.photos/id/1015/320/160",
                "https://picsum.photos/id/1025/320/160",
                "https://picsum.photos/id/1035/320/160"];
// khoi tao bien luu tru anh
let index = 0;
// hien thi anh dau tien
document.addEventListener('DOMContentLoaded', function(){
    const img = document.getElementById('ev-05img');
    // hien anh dau tien
    img.src = images[index];
})
// ham chuyen anh
function move(direction){
    switch(direction){
        case "prev":
            // neu dang o anh dau
            if(index === 0){
                index = images.length - 1;
            }
            else{
                index--;
            }
            break;
        case "next":
            // neu anh dang o cuoi 
            if(index === images.length -1){
                index = 0;
            }
            else{
                index++;
            }
            break;

    }
    const img = document.getElementById('ev-05img')
    img.src = images[index];
    document.getElementById("ev05-out").innerHTML = `Slide ${index + 1} / ${images.length}`;
}
