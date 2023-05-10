let num = 4
if (num > 3) {
    console.log(`${num} is a positive number`)
}
let isRaining = true
if (isRaining) {
    console.log('Git şemsiye al')
}

// ---------------------------------

let numm = 4
if (numm > 5) {
    console.log('aferin')
}

else {
    console.log('yanliş')
}
// -----------------------------------
let result=prompt('5+7 kaç yapar?','5+7')
if (result==12){
    console.log('DOĞRU CEVAP DOSTUM')
}
else {
    console.log('YANLIŞ CEVAP DOSTUM')
}

// --------------------------------------
let nummm=prompt('aklımdan tuttuğum sayı kaçtan büyüktür bil')
if (nummm>10){
    console.log('helal sana')
}
else if (nummm<10){
    console.log('yanlış cevap')
}
else(
    console.log('başaramadın')
)


let bedo=prompt('hava bugün nasıl?')
if (bedo=='güneşli'){
    console.log('t-shirt giyiniz')
}
else if (bedo=='yağmurlu'){
    console.log('yağmurluk giyiniz.')

}
else if (bedo=='karlı'){
    console.log('mont giyiniz.')
}
else{
    console.log('nasıl istiyorsan öyle giyin.')
}
// -----------------------------------------

let havaDurumu='bulutlu'
switch (havaDurumu){
case 'rainy':
    console.log('yağmurluk al')
    break
case 'bulutlu':
    console.log('dikkat et yağmur yağabilir')       
    break
default:
console.log('t-shirt giy')

}
// -----------------------------------------

let resultt=7
console.log(resultt==56 ? 'Doğru' : 'Yanlış')
