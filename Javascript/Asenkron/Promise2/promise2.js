const promise1 = new Promise((resolve, reject) => resolve("DATA"));

promise1.then(value => console.log(value));

// -----------------------------------------------------

const promise2 = new Promise((resolve, reject) => reject());

promise2.catch(() => {
    console.log("Promise başarılı değil!")
})

// -----------------------------------------------------

// ÖRNEK 
const books = [
    { name: "Hayvan Çifliği", author: "George Orwell" },
    { name: "Nemesis", author: "Jo Nesbo" },
    { name: "Simyacı", author: "Paulo Coelho" }
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

// const addNewBook = (newBook, callback) => {
//     books.push(newBook)
//     callback()
// }

// addNewBook({name:"Berlin Hatıralarım", author:"Hüsrev Gerede"}, listBooks);


const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
        reject("Hata")

    })
    return promise1
}

addNewBook({ name: "Berlin Hatıralarım", author: "Hüsrev Gerede" })
    .then(() => {
        console.log("Yeni liste");
        listBooks();
    })
    .catch((reason) => {
        console.lof(reason)
    })

