class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new Person('Uğur', 'Ulupınar')
const person2 = new Person('Bedirhan', 'Şahin')
const person3 = new Person('Alper', 'İnci')
console.log(person1, person2, person3)

// ----------------------------------------------------

function Person1(name, job) {
    this.name = name
    this.job = job
}
let bedirhan = new Person1('Bedirhan', 'student')
let ahmet = new Person1('Ahmet', 'intern')

console.log(bedirhan, ahmet)

// ----------------------------------------------------

function Personel(name, age) {
    this.name = name
    this.age = age
    this.dateOfBirth = function () {
        return 2023 - this.age;
    }
}
let bedo = new Personel('bedirhan', 23)
console.log(bedo)
console.log(bedo.dateOfBirth())