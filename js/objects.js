ad = 'bedirhan' //window scope

// ---------------------------------------------

let name = 'bedo'
let surname = 'şahin'
function letsLearnScope() {
    console.log(name, surname)
    if (true) {
        let name = 'uğur'
        let surname = 'ulupinar'
        console.log(name, surname)
    }
    console.log(name, surname)
}
letsLearnScope()
console.log(name, surname)

// ----------------------------------------------

{
    let deneme = 'bedo'
    console.log(deneme)
}

// ----------------------------------------------

const user = {

    name1: 'bedirhan',
    surname1: 'şahin',
    age: 23,
    isMarried: false,
    skills: [
        'Javascript',
        'Html',
        'Css'
    ],
    getFullName: function () {
        return `${this.name1} ${this.surname1}`
    }

}
console.log(user)
console.log(user.getFullName())
user.name1 = 'Ali'
user.skills.push('Reakt')

// -----------------------------------------------

const user2 = {
    name2: 'uğur',
    surname2: 'ulupınar',
    age2: 24
}
console.log(user2)
// let user3 = user2 
// user3.name2 = 'Eren'
// console.log(user3)
let user3 = Object.assign({}, user2)
user3.name2 = 'Eren'
console.log(user3)

// ------------------------------------------------

console.log(Object.keys(user2))

// ------------------------------------------------

console.log(Object.values(user2))

// ------------------------------------------------

console.log(Object.entries(user2))

// ------------------------------------------------

console.log(user2.hasOwnProperty('name4'))

// ------------------------------------------------

