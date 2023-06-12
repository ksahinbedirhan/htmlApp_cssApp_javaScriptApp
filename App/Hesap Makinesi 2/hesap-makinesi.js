// let num1 = prompt ("Birinci sayıyı giriniz.");
// let islem = prompt ("Yapacağınız işlemi giriniz. (+, -, /, *)");
// let num2 = prompt ("İkinci sayıyı giriniz.");
// let sonuc ;

// if(islem === "+"){
//    sonuc = Number(num1) + Number(num2);
// }
// else if(islem==="-"){
//     sonuc = Number(num1) - Number(num2);
// }
// else if(islem==="/"){
//     sonuc = Number(num1) / Number(num2);

// }
// else if (islem==="*"){
//     sonuc = Number(num1) * Number(num2);
// }
// else{
//     console.log("Yanlış bir işlem yaptınız.");
// }

// if(typeof sonuc !=="undefined"){
// console.log("sonuc", sonuc);
// }
let num1 = parseFloat(prompt("Birinci sayıyı giriniz."));
let islem = prompt("Yapacağınız işlemi giriniz. (+, -, /, *)");
let num2 = parseFloat(prompt("İkinci sayıyı giriniz."));
let sonuc;

if (islem === "+") {
  sonuc = num1 + num2;
} else if (islem === "-") {
  sonuc = num1 - num2;
} else if (islem === "/") {
  sonuc = num1 / num2;
} else if (islem === "*") {
  sonuc = num1 * num2;
} else {
  console.log("Yanlış bir işlem yaptınız.");
}

if (typeof sonuc !== "undefined") {
  console.log("sonuc", sonuc);
}
