const parent = document.getElementById("parent")
const child = document.getElementById("child")
child.addEventListener('click', function(e){
    e.stopPropagation()
    console.log("click child")
})
parent.addEventListener('click', function(e){
    console.log("click parent")
})