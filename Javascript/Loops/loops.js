for (let ii = 0; ii <= 5; ii++) {
  console.log("ciguli", ii);
}
// -----------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log(`${i} * ${2} = ${i * 2}`);
}

// -----------------------------------------

const namess = ["uğur", "nuri", "alper", "ömer"];
for (let i = 0; i < namess.length; i++) {
  console.log(namess[i]);
}

// -----------------------------------------

let bedo = ["1", "2", "3", "4"];
let newBedo = [];
for (let i = 0; i < bedo.length; i++) {
  newBedo.push(bedo[i]);
}
console.log(newBedo);

// ------------------------------------------

const namesss = ["Türkiye", "Azerbaycan", "Kıbrıs"];
let ii = 0;
while (ii < namesss.length) {
  console.log("isim:", namesss[ii]);
  ii++;
}

// --------------------------------------------

const namessss = ["Türkiye", "Azerbaycan", "Kıbrıs"];
let iii = 3;
do {
  console.log("Ülke", namessss[iii]);
  iii++;
} while (iii < namessss.length);

// ----------------------------------------------

const nam1 = ["bedirhan", "uğur", "nuri", "alper"];
for (let nam of nam1) {
  console.log("isim:", nam);
}

// ------------------------------------------------

const nam9 = ["bedirhan", "uğur", "nuri", "alper"];
for (let namm of nam9) {
  if (namm == "nuri") {
    console.log(`${namm} bulundu`);
    break;
  }
  console.log("ad", namm);
}

// ----------------------------------------------

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
continue
  }
  console.log(i);
}
