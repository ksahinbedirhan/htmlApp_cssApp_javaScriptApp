let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("PROMISE BAŞARILI")
//     }
//     else {
//         reject("PROMISE BAŞARISIZ")
//     }

// })

// console.log(promise1);

function createPromise() {

    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise'de sıkıntı yok.")
        } else {
            reject("Promise'de sıkıntı var.")
        }
    })
}

createPromise()
    .then((responce) => {
        console.log(responce)
    })
    .finally(() => {
        console.log("Her türlü başarılı.")
    })

// ---------------------------------------------
// json'dan alacağım...

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            })
        } catch (error) {
            reject(error)
        }
        xhr.open("GET", url);
        xhr.send()
    })
}
readStudents("promise.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))