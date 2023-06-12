// 1

let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

// 2

let regex = /love/gi

// ------------------------------------------

let word = /salak/i
let comment = 'sen Salak misin kardesim?'
console.log(
    word.test(comment)
)

// ------------------------------------------

// let comment2 = prompt ('Yorumunu yaz! Ama yazarken dikkat et.')
// let word2 = /mal/i
// if(word2.test(comment2)){
//     alert('Mal sensin kardeş.')
// }
// else{
//     console.log('Eyvallah hocam.')
// }

// console.log(
//     word2.test(comment2)
// )

// ------------------------------------------

let str = 'I likE Javascript and i like Bedirhan'
console.log(
    str.match(/like/ig)
)

// ------------------------------------------

const txt = 'Ben Ankara ilinde doğdum ve burada yaşıyorum. Ankara ilini çok seviyorum çünkü burada trafik yok ve havası nemli değil.'

console.log(txt.replace(/Ankara/g, 'Bursa'))

// ------------------------------------------

let str3 = 'Benim adım Eren, 17 yaşındayım. Ankara ilinde yaşıyorum. Stajyer olarak bir şirkette çalışmaktayım. Ve işimden oldukça memnunum.'
console.log(str3.match(/\D+/g))

// ------------------------------------------

let exp = '546 789 545 459845 948'
console.log(exp.match(/\b\d{3}\b/g))

// ------------------------------------------

let exp2 = 'Ben 30 yasindayim ve 2000 yilinda dogdum telefon no 189027380123'
console.log(
    exp2.match(/\b\w{2,4}\b/g)
)

// ------------------------------------------

