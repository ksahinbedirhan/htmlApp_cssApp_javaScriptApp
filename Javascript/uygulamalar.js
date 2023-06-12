const h1 = document.querySelectorAll(".class")[0]
console.log(h1.attributes)

// ---------------------------------------------------

console.log(h1.clientWidth)

// ---------------------------------------------------

const h2 = document.querySelectorAll(".class2")[0]
console.log(h2.previousElementSibling)

// ---------------------------------------------------

const hepsiBurada = document.querySelectorAll("a");
hepsiBurada.forEach(function(element) {
    element.addEventListener("click", run);
});

function run(e) {
    e.preventDefault();
}
