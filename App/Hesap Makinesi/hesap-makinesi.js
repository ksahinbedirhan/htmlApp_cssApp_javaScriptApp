let num1 = parseFloat(prompt("Birinci sayıyı giriniz."));
let islem = prompt("Yapacağınız işlemi giriniz. (+, -, /, *)");
let num2 = parseFloat(prompt("İkinci sayıyı giriniz."));
let sonuc;

if (islem === "+") {
  sonuc = num1 + num2;
} else if (islem === "-") {
  sonuc = num1 - num2;
} else if (islem === "/") {
  if (num2 !== 0) { // Sıfıra bölme hatasını kontrol et
    sonuc = num1 / num2;
  } else {
    console.log("Sıfıra bölme hatası!");
  }
} else if (islem === "*") {
  sonuc = num1 * num2;
} else {
  console.log("Yanlış bir işlem yaptınız.");
}

if (typeof sonuc !== "undefined") {
  console.log("Sonuç:", sonuc);
}
