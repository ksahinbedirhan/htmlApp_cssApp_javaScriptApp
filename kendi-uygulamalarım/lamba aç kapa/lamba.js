let aç = document.querySelectorAll(".aç")[0];
let kapat = document.querySelectorAll(".kapat")[0];
let image;

aç.addEventListener("click", run);
kapat.addEventListener("click", run2);

function run() {
    if (image) {
        document.body.removeChild(image);
    }
    image = new Image();
    image.src = "lamba_acik.jpg"; 
    image.alt = "lamba_acik"; 
    document.body.appendChild(image);
    document.body.style.textAlign="center";
}

function run2() {
    if (image) {
        document.body.removeChild(image);
    }
    image = new Image();
    image.src = "lamba_kapali.jpg"; 
    image.alt = "lamba_kapali"; 
    document.body.appendChild(image);
    document.body.style.textAlign="center";
}

