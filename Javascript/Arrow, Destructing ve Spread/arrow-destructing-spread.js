// function yazdir(firstName){
//     console.log("Merhaba", firstName)
// }
// yazdir("Bedirhan");

const yazdir = (firstName, lastName) => console.log("Merhaba", firstName, lastName)

yazdir("Bedirhan", "Şahin");

// -------------------------------------------------

let langs = ["ingilizce", "türkçe", "fransızca", "almanca", "kürtçe"]
let [lang1, lang2, lang3, lang4, lang5] = langs
// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];
// lang5 = langs[4];

console.log(lang1, lang2, lang3, lang4, lang5)

// -------------------------------------------------

const hesapla = (a, b) => {
    const topla = a + b;
    const çıkar = a - b;
    const çarp = a * b;
    const böl = a / b;

    const dizi = [topla, çıkar, çarp, böl]
    return dizi
};
let [a, b, c, d] = hesapla(8, 4)
console.log(a, b, c, d)

// -------------------------------------------------

const person = {
    firstName: "Bedirhan",
    lastName: "Şahin",
    age: 23,
    job: "developer"
};

let { firstName: ad, lastName: soyad, age: yaş, job: iş } = person;
console.log(ad, soyad, yaş, iş);

// -------------------------------------------------

let numbers = [10, 20, 30, 40]
function add(a, b, c, d) {
    console.log(a + b + c + d)
}
add(...numbers)

// -------------------------------------------------

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [x, y, ...kalanSayilar] = number
console.log(x, y, kalanSayilar)

// -------------------------------------------------

const array1 = ["bedo", "uğur", "alper"]
let array2 = [...array1]
console.log(array2)