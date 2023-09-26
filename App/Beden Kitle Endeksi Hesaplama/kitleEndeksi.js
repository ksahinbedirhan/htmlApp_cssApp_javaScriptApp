let kilo = Number(prompt("Lütfen Kilonuzu Giriniz"));
let boy = Number(prompt("Boyunuzu Metre Cinsinden Giriniz (örneğin: 1.70)"));
let sonuc = kilo / (boy * boy);
if (sonuc < 18.5) {
    console.log("İdeal kilonun altında" + sonuc)
}
else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal kiloda" + sonuc)
}
else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İdeal kilonun üstünde" + sonuc)
}
else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("İdeal kilonun çok üstünde (obez)" + sonuc)
}
else if (sonuc >= 40) {
    console.log("İdeal kilonun çok üstünde (morbid obez)" + sonuc)
}