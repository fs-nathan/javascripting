const form = document.getElementById("form")
const name = document.getElementById("Name")
const mail = document.getElementById("Email")
const list = document.getElementById("list")
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(form.elements["Name"].value)
    console.log(form.elements["Email"].value)
    
})