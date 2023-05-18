const fonksiyon = number => number ** 2
function cube(cb, number) {
    return cb(number) * number
}
console.log(cube(fonksiyon, 3))

// --------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6]
let total = 0
numbers.forEach(numbers => total += numbers)
console.log(total)

// --------------------------------------------

function ankara() {
    console.log('bedirhan')
}
const interval = setInterval(ankara, 100000)

// --------------------------------------------

const number3 = [1, 2, 3, 4, 5];
const number4 = number3.map(number => {
    return number * 2;
});
console.log(number4)

// --------------------------------------------

const num = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(num.filter(num => num < 3 && num>1))

// --------------------------------------------

