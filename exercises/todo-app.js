let items = [];

getDataFromLocalStorage();

// render ol items
function renderOlItems() {
  const list = document.getElementById("list-items");
  list.innerHTML = "";
  items.forEach((item) => {
    insertListItem(item);
  });
}

function getDataFromLocalStorage() {
  const itemsFromLocalStorage = localStorage.getItem("list");
  if (itemsFromLocalStorage) {
    items = JSON.parse(itemsFromLocalStorage);
  }
}

function updateDataIntoLocalStorage() {
  localStorage.setItem("list", JSON.stringify(items));
}

function onCompleted(e) {
  const checked = e.target.checked;
  const itemId = e.target.attributes["data-id"].value;

  const itemNameElement = document.getElementById(itemId);

  if (checked) {
    itemNameElement.classList.add("strike-through");
  } else {
    itemNameElement.classList.remove("strike-through");
  }
}

function insertListItem(item) {
  /* update DOM ol */

  const li = document.createElement("li");
  li.innerHTML = `<span class="item-name" id="${item.id}">${item.name} </span><span class="actions"><input class="checkbox" type="checkbox" onchange="onCompleted(event)" data-id="${item.id}"/><i class="fas fa-trash" data-id="${item.id}" onclick="onItemDelete(event)"></i></span>`;

  const list = document.getElementById("list-items");
  list.append(li);
}

function onItemAdd(e) {
  if (e.key == "Enter") {
    const newItem = {
      name: e.target.value,
      completed: false,
      id: new Date().getTime(),
    };

    items.push(newItem);
    updateDataIntoLocalStorage();

    insertListItem(newItem);

    e.target.value = "";
  }
}

function onItemDelete(e) {
  const itemId = e.target.attributes["data-id"].value;

  /* remove from items and update localStorage */
  items = items.filter((item) => item.id != itemId);
  updateDataIntoLocalStorage();

  /* remove from DOM */

}
