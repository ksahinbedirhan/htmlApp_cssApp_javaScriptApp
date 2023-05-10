// ---------------------------------------------

const words = 'Bedirhan'
console.log(words.split(''))

// --------------------------------------------
let names2 = ['Bedirhan', 23, 2000, 'Ankara']
console.log(names2)
let fruits = ['elma', 'armut', 'muz', 'karpuz']
console.log(fruits[2])

// -------------------------------------------

const numbers = [1, 2, 3, 4, 5,]
numbers[0]=10
numbers[3]=33
console.log(numbers)

// --------------------------------------------

let names = Array(3).fill('ankara')
console.log(names)

// -------------------------------------------

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let resultt = array2.concat(array1)
console.log(resultt)

// -------------------------------------------

const numberss = [1, 2, 3, 4, 5, 6]
console.log(numberss.indexOf(84))

// -------------------------------------------

let name3=['bedirhan', 'ahmet', 'eren', 'ali', 'bedirhan', 'mehmet']
console.log(name3.lastIndexOf('bedirhan'))

// --------------------------------------------

const number6 = [1, 2, 3, 4, 5, 6]
console.log(number6.includes(84))
console.log(Array.isArray(number6))

// --------------------------------------------

let nam=['bedirhan', 'ahmet', 'eren', 'ali', 'bedirhan', 'mehmet']
console.log(nam.toString())

// -------------------------------------------

const nu = ['dere', 'deniz', 'göl', 'okyanus']
console.log(nu.join('|'))

// -------------------------------------------

const number7 = [1, 2, 3, 4, 5]
console.log(number7.slice(0,3))

// ------------------------------------------

const number8 = [1, 2, 3, 4, 5]
console.log(number8.splice(2,2,8,9))
console.log(number8)

// ------------------------------------------

const ar2 = ['Bedirhan', 'Ahmet', 'Ümit', 'Eren']
ar2.push('Yusuf')
console.log(ar2)

// ------------------------------------------ 

const ar3 = [1, 2, 3, 4, 5]
ar3.pop()
ar3.shift()
console.log(ar3)

// ------------------------------------------

const number12 = [1, 2, 3, 4, 5]
number12.unshift(0)
console.log(number12)

// ------------------------------------------

const number13 = [1, 2, 3, 4, 5]
number13.reverse()
console.log(number13)

// ------------------------------------------

const num1 = [1, 5, 4, 6, 2, 7, 3]
num1.sort()
console.log(num1)

// ------------------------------------------

 
