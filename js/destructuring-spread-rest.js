let name1 = ['Bedirhan', 'Şahin'];
let [firstName, lastName] = name1;
console.log(firstName, lastName)

// -----------------------------------------------

let user = ['Uğur', 'Ulupınar', 'Ankara', 'Karapürçek']
let [firstName1, lastName1, , town] = user;
console.log(firstName1, lastName1, town)

// -----------------------------------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(...rest)

// -----------------------------------------------

const msj = ['Benim', 'adım', 'Bedirhan'];
let sonuc = "";
for (let x of msj) {
    sonuc += x + " ";
}
console.log(sonuc)

// -----------------------------------------------

const lesson = [
    ['Matematik', 'Ahmet'],
    ['Fizik', 'Arife'],
    ['Kimya', 'Ali'],
    ['Biyoloji', 'Esma']
]
for (const less of lesson) {
    console.log(`Ders: ${less[0]} - Öğretmen: ${less[1]}`)
}

// -----------------------------------------------

const user1 = {
    name: 'Bedirhan',
    surname: 'Şahin',
    age: 23
}

let { name } = user1
console.log(name)

// -----------------------------------------------

function multi(num1, num2) {
    return num1 * num2
}
console.log(multi(10, 10))

// -----------------------------------------------

const numbers = [1, 3, 5, 4, 6, 7]
const numberss = [...numbers]
console.log(numbers)
numberss.push(9)
console.log(numbers)

