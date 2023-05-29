// const clearButton = document.querySelector("#todoClearButton");
// const cardTitle = document.querySelectorAll(".card-title")[1];
// clearButton.addEventListener("click", function () {
//     cardTitle.textContent = "Aferin Bedo"
// })

// --------------------------------------------------------

// const clearButton = document.querySelector("#todoClearButton");
// clearButton.addEventListener("click", changeTitle);
// function changeTitle(e) {
//     document.querySelectorAll('.card-title')[1].textContent="Todo Başlığı Değişti"
// }

// --------------------------------------------------------

// document.addEventListener("keypress", run);
// function run(e){
//     console.log(e.key);
// }

// --------------------------------------------------------

// const todoName = document.querySelector("#todoName");
// const cardTitle = document.querySelectorAll(".card-title")[0];
// todoName.addEventListener("keyup", run);
// function run(e) {
//     cardTitle.textContent = e.target.value

// }

// --------------------------------------------------------

const todo = document.querySelector("#todoName");
todo.addEventListener("cut", run);
function run(e){
    alert("kesilen şey:" + e.target.value)
}

// --------------------------------------------------------

