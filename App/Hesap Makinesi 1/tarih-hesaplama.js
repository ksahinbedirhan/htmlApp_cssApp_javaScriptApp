let tarih1 = prompt('Tarih giriniz. (YYYY-AA-GG):');
let tarih2 = prompt('Tarih giriniz (YYYY-AA-GG):');

function hesaplaGunFarki(tarih1, tarih2) {
    let history1 = new Date(tarih1);
    let history2 = new Date(tarih2);
    let history1Milisaniye = history1.getDate();
    let history2Milisaniye = history2.getDate();
    let farkGun = Math.floor(history2Milisaniye - history1Milisaniye);
    return farkGun;
  }
  
  let gunFarki = hesaplaGunFarki(tarih1, tarih2);
  console.log('Gün Farkı: ' + gunFarki + ' gün');
  