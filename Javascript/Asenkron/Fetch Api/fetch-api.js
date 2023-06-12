function getStudents(url) {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => console.log(data))
}
getStudents("fetch-api.json");

// -----------------------------------------

function getData(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("Hata oluştu:", error);
        });
}

getDdata("https://jsonplaceholder.typicode.com/posts");
