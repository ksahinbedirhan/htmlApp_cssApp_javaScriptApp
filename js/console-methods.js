console.log('30 days of Javascript')
console.log({
    name: 'Bedirhan',
    surname: 'Şahin'
})
console.log(['Bedirhan', 'Şahin'])
console.log(23)
console.log('Ben %d yaşındayım', 23)

// ---------------------------------------------

console.log('%cDUR!', 'font-size: 50px; color:red')

// ---------------------------------------------

let num = 'Ben bir insanım ve bu yüzden yoruluyorum.'
console.warn(num)

// ---------------------------------------------

console.error('Sen naptın kardeş?')

// ---------------------------------------------

let names = {
    name: 'Bedirhan',
    surname: 'Şahin'
}
console.table(names)

// ---------------------------------------------

console.time('calculate')
console.log(
    new Array(10).fill().map((value, index) => index)
)
console.timeEnd('calculate')

// ---------------------------------------------

console.assert(4<3, 'Sence yazdığın şey doğru mu?')

// ---------------------------------------------

const test = () => {
    console.count('Bedirhan')

}
test()
test()