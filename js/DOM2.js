let h1 = document.getElementsByTagName("h1");
for (let i = 0; i < h1.length; i++) {
    console.log(h1[i])
}

// ------------------------------------------------------

let num = document.getElementsByClassName('title1');
console.log(num)

// ------------------------------------------------------

let num2 = document.getElementById('title3');
console.log(num2)

// ------------------------------------------------------

const h4 = document.getElementById('title4');
h4.style.color = 'white';
h4.style.fontSize = '40px';
h4.title = 'selam';
console.log(h4)

// ------------------------------------------------------

const h5 = document.getElementById('title5');
h5.setAttribute('style', 'font-size: 45px; color:red');
console.log(h5)

// ------------------------------------------------------

const angara = document.getElementById('title5');
angara.innerHTML = '<b>Başlık55</b>';
console.log(angara)

// -----------------------------------------------------

const todoList = document.querySelector('#title3');
todoList.setAttribute('style', 'color:yellow; font-size:20px');
console.log(todoList)

// -----------------------------------------------------

const title2 = document.querySelectorAll('.title1')[1];
title2.setAttribute('style', 'color: green')

// -----------------------------------------------------

// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('mouseover', run);


// function run() {
//     window.open('https://www.youtube.com/', '_blank');

// }

// -----------------------------------------------------

const a = document.getElementsByTagName('input')[0]
a.addEventListener('input', run)
function run(e) {
    console.log(e.target.value);
}

// -----------------------------------------------------

const name = document.getElementById('name');
name.addEventListener('input', bedo);
function bedo(e) {
    document.body.style.backgroundColor = e.target.value;
}