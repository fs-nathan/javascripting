// lay phan tu 

const input = document.querySelector("input");
const addBtn = document.querySelector(".plus-wrapper button");
const todoList = document.getElementById("todo-list");

// tao mang luu tru

let todos = [];

// them su kien

addBtn.addEventListener("click", function () {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    todos.push(text);

    saveTodo();

    renderTodo();

    input.value = "";

});

// ham hien thi

function onFocusOut(e) {
    // console.log(e.target.textContent)
}

function onKeyDown(e, index) {
    if (e.key == 'Enter') {
        e.preventDefault();
        const value = e.target.textContent;

        e.target.blur();

        todos[index] = value;
        saveTodo();
    }
}


function renderTodo() {

    todoList.innerHTML = "";

    todos.forEach(function (todo, index) {

        const li = document.createElement("li");
        // cho nay them check box voi icon xoa sau tiep nua la them chinh sua
        li.innerHTML = `
            <input type = "checkbox">
            <span class="item-name" onfocusout="onFocusOut(event)" onkeydown="onKeyDown(event, ${index})">${todo}</span>
            <button class="edit-btn">Sua</button>
            <button class="delete-btn">🗑</button>
        `;
        // lay luon phan tu xoa, check box o day
        const checkbox = li.querySelector("input")
        const span = li.querySelector('span')
        const editBtn = li.querySelector(".edit-btn")
        const deleteBtn = li.querySelector(".delete-btn");
        // bat su kien xoa
        deleteBtn.addEventListener("click", function () {

            todos.splice(index, 1);

            saveTodo();

            renderTodo();

        });
        // bat su kien check box
        checkbox.addEventListener('change', function(){
            if(checkbox.checked){
                span.style.textDecoration = "line-through"
            }
            else{
                span.style.textDecoration = "none"
            }
        })
        // bat su kien nut sua
        editBtn.addEventListener('click', function(){
            span.setAttribute('contenteditable', "true")
        })
        todoList.appendChild(li);

    });

}

// luu gia tri vao local

function saveTodo() {

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

}

// doc local

function loadTodo() {

    const data = localStorage.getItem("todos");

    if (data) {

        todos = JSON.parse(data);

    }

}


loadTodo();

renderTodo();