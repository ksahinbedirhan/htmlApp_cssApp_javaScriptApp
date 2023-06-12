const hesapmakinesi = document.querySelector(".hesapmakinesi");
const input = document.querySelector(".input");

hesapmakinesi.addEventListener("click", run)
function run(e) {
    if (e.target.matches("button") && e.target.innerText != "C" && e.target.innerText != "=") {

        input.value += e.target.innerText

    }
}
