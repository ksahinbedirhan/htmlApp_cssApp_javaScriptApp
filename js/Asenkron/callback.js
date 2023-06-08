function getName(callback) {
    setTimeout(() => {
        console.log("Bedirhan");
        callback();   
    }, 1000);
}

function getSurname() {
    setTimeout(() => {
        console.log("Şahin")
    }, 500);
}

// getName();
// getSurname();

getName(getSurname)
