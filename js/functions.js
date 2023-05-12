function sayHello(){
    console.log('Hello')
    
}
sayHello()

// -----------------------------------------------------------------

let num1 = prompt('Lütfen istediğiniz bir sayıyı giriniz.')
let num2 = prompt('Lütfen istediğiniz bir sayıyı giriniz.')
function toplam(num1, num2){
   return num1*num2
}
let total = toplam(num1, num2)
console.log('çarpımı', total)

// ------------------------------------------------------------------ 

function sumAllNums(){
console.log(arguments)
}
let topla = sumAllNums(2, 4, 5)
console.log(topla)

// ----------------------------------------------------------------- 

const sayHelloo = function(name) {
    return `Hello ${name}`
}
console.log(sayHelloo('Bedirhan'))