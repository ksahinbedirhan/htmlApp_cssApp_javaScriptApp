const sayılar = new Set([1, 9, 6, 2, 3, 4]);
sayılar.delete(2)
console.log(sayılar.has(5))
console.log(sayılar)

// ----------------------------------------------

const names = new Set(['bedirhan', 'uğur', 'eren', 'alper']);
for (const name of names) {
    console.log('Adı:', name)
}

// ----------------------------------------------

const languages = [
    'English',
    'French',
    'Spanish',
    'Turkish',
    'English',
    'French'
]
const langSet = new Set(languages)
console.log(langSet)

// ----------------------------------------------

let a = [1, 2, 3, 4, 5, 6]
let b = [4, 5, 6, 7]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// ---------------------------------------------- 

const d = [1, 2, 3, 4, 5]
const e = [4, 5]

let E = new Set(e)
console.log(d.filter(num=>!E.has(num))) 

// ---------------------------------------------- 

const ögrenciler = new Map();
ögrenciler.set('276123892329839', 'Bedirhan');
ögrenciler.set('768436376767839', 'Uğur')
console.log(ögrenciler.get('276123892329839'))

let sonuc;
sonuc = ögrenciler.size
console.log(sonuc)

// ----------------------------------------------

const calisanlar = new Map();
calisanlar.set(1, 'Alper');
calisanlar.set(2, 'Bedirhan');
calisanlar.set(3, 'Uğur');
console.log(calisanlar)
for (let x of calisanlar.keys()) {
    console.log(x)
}

// ----------------------------------------------

 

