let sampleJSON = `[
    {
        "name": "bedirhan",
        "surname": "şahin"
    },
    {
        "name": "uğur",
        "surname": "ulupınar"
    },
    {
        "name": "eren",
        "surname": "şahin"
    }
]`;
let users = JSON.parse(sampleJSON)
console.log(users)

// ------------------------------------------

let categories = [
    {
        name: 'css',
        count: 5
    },
    {
        name: 'javascript',
        count: 16
    }
]
let user = JSON.stringify(categories)
console.log(user)

// ------------------------------------------

