// const clearButton = document.querySelector("#todoClearButton");
// const cardTitle = document.querySelectorAll(".card-title")[1];
// clearButton.addEventListener("click", function () {
//     cardTitle.textContent = "Aferin Bedo"
// })

// --------------------------------------------------------

const clearButton = document.querySelector("#todoClearButton");
clearButton.addEventListener("click", changeTitle);
function changeTitle(e){
    console.log(e.target);
    console.log(e.type)
}

