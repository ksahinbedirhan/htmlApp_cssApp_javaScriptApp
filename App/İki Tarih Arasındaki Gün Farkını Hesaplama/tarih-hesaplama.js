let tarih1 = prompt('Tarih giriniz. (YYYY-MM-DD):');
let tarih2 = prompt('Tarih giriniz (YYYY-MM-DD):');

function hesaplaGunFarki(tarih1, tarih2) {
  let history1 = new Date(tarih1);
  let history2 = new Date(tarih2);

  let history1Milisaniye = history1.getTime();
  let history2Milisaniye = history2.getTime();

  let farkMilisaniye = Math.abs(history2Milisaniye - history1Milisaniye);
  let farkGun = Math.floor(farkMilisaniye / (1000 * 60 * 60 * 24));

  return farkGun;
}

let gunFarki = hesaplaGunFarki(tarih1, tarih2);
console.log('Gün Farkı: ' + gunFarki + ' gün');
