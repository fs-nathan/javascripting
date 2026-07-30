const item1 = document.getElementById("btn-01")
const item2 = document.getElementById("div-01")
item1.addEventListener('click', () => {
    item2.textContent = "Button was clicked!"
})