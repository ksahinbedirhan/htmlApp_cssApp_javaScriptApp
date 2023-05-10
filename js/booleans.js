let value=4<3
console.log(value)
let firstName
console.log(firstName)

// -------------------------------------

let c=5
let d=6
console.log(c==d)

// -------------------------------------

console.log('mango'. length == 'avacado'. length)
console.log('milk'. length != 'meat'. length)
console.log('milk'. length == 'meat'. length)

// -------------------------------------


let count = 3
console.log(count++)
console.log(count)

// -------------------------------------

let a=4
let b=10
console.log(a+=b)

// -------------------------------------

const check = 4 > 3 && 10 > 5
console.log(check)
const checkk = 5 < 3 && 11>7
console.log(checkk)

// -------------------------------------

const checkkk = 4 > 3 || 10>5
console.log(checkkk)
const checkkkk = 4 > 3 || 10<5
console.log(checkkkk)

const checkkkkk = 4 > 3
console.log(!checkkkkk)

// -------------------------------------

let result = 5<4 ? 'evet bu doğru' : 'senin matematiğini seveyim'
console.log(result)

// --------------------------------------

let sayi = prompt('Bir sayı girin', '6')
let resultt = sayi * 2
console.log(resultt)

// -------------------------------------

let kedi='çok güzelsin'
confirm(kedi)
let isDelete = confirm('silmek istediğine emin misin?')
console.log(
isDelete ? 'Silme işlemi başarılı' :'Silme işlemi iptal edildi'
)

// --------------------------------------

const now = new Date()
console.log(now)
const date = new Date()
console.log(date.getFullYear())
