// console.log(document);

// console.log(document.location);

// console.log(document.location.pathname);

// let value;
// value = (document.location.href);
// console.log(value);

// console.log(document.links.item(4).classList[3])

// ------------------------------------------------

// const todoList = document.querySelector(".list-group");
// const card = document.getElementsByClassName("card");

// console.log(todoList)
// console.log(card)

// let value;

// value = todoList;
// value = todoList.children[1];
// value = todoList.children[todoList.children.length - 1].textContent = "Raze"
// value = Array.from(todoList.children);
// value.forEach(function (todo) {
//     console.log(todo.textContent);
// })
// console.log(value);

// ------------------------------------------------

// let value;
// value = todoList.parentElement.parentElement.parentElement.parentElement;
// console.log(value)

// ------------------------------------------------

// let value;

// value = todoList.nextElementSibling;
// value = todoList.previousElementSibling;

// console.log(value)

// ------------------------------------------------

// let value;
// value = todoList.parentElement.children[0].textContent = 'Ekleme KaRDEŞİM' ;
// console.log(value) 

// ------------------------------------------------

// let row = document.querySelector('.row')
// let value;
// value = row.children[0].children[3].children[0].textContent = 'eren'
// console.log(value)

// ------------------------------------------------

// let container = document.querySelector('.container')
// let value; 
// value = container.children[0].children[0].children[3].children[2].children[2].textContent = 'bedirhan'

// console.log(value)

// let bedo = document.querySelectorAll('.list-group-item')[2];
// bedo.setAttribute('style', 'background-color: red; font-size: 100px')
// bedo.style.color = 'white';
// bedo.style.fontSize ='10px';
// bedo.style.backgroundColor = 'black'

// console.log(bedo)

// ------------------------------------------------

const cardBody = document.querySelectorAll('.card-body')[1];
const link = document.createElement('a');
link.id = 'goBlogWebSite';
link.className = 'btn btn-primary btn-sm mt-3';
link.target = '_blank';
link.textContent = 'Tüm Todoları Seç';
link.href = 'google.com'
link.style.color = 'white'
cardBody.appendChild(link);

// ------------------------------------------------
/* <li class="list-group-item d-flex justify-content-between">Todo 4
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li> */

const ul = document.querySelector('.list-group');
const li = document.createElement('li');
const a = document.createElement('a');
const i = document.createElement('i');

li.className = 'list-group-item d-flex justify-content-between';
li.innerHTML = 'Todo 5';

a.href = '#';
a.className = 'delete-item';

i.className = 'fa fa-remove';

a.appendChild(i);
li.appendChild(a);
ul.appendChild(li);

// ------------------------------------------------

const todoList = document.querySelector(".list-group");
const todo = todoList.children[0];
todo.remove()

// ------------------------------------------------

const cardHeader = document.querySelector(".card-header");
const yeniTodo = document.createElement("h2");
yeniTodo.className = 'card-title';
yeniTodo.textContent = 'Değişen Todo List Sayfası';
cardHeader.replaceChild(yeniTodo, cardHeader.childNodes[0])

