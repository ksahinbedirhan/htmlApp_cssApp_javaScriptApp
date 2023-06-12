let result = prompt(
  "Lütfen vergi yüzdenizi öğrenmek için brüt maaşinizi giriniz."
);

if (result <= 10000) {
  console.log(result * 0.9);
  console.log("Vergi yüzdeniz %10 dur.");
} else if (result < 20000) {
  console.log("Vergi yüzdeniz %15 dur.", result * 0.75);
} else if (result >= 20000) {
  console.log("vergi yüzdeniz %20 dir", result * 0.8, result * 0.6);
} else {
  console.log("hatalı giriş yaptınız lütfen sayı giriniz.");
}
