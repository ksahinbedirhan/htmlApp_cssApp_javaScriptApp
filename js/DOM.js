// console.log(document);

// console.log(document.location);

// console.log(document.location.pathname);

// let value;
// value = (document.location.href);
// console.log(value);

// console.log(document.links.item(4).classList[3])

// ------------------------------------------------

const todoList = document.querySelector(".list-group");
const card = document.getElementsByClassName("card");

console.log(todoList)
console.log(card)

let value;

value = todoList;
value = todoList.children[1];
value = todoList.children[todoList.children.length - 1].textContent = "Raze"
value = Array.from(todoList.children);
value.forEach(function (todo) {
    console.log(todo.textContent);
})
console.log(value);