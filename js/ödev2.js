/*
let array = [];
let sayi1 = prompt("birinci sayıyı giriniz");
array.push(parseInt(sayi1));
let sayi2 = prompt("ikinici sayıyı giriniz");
array.push(parseInt(sayi2));
let sayi3 = prompt("üçüntü sayıyı giriniz");
array.push(parseInt(sayi3));

for (let i = 0; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++) {
    console.log(`${array[i]} , ${array[j]}`);

    if (array[i] < array[j]) {
      console.log(`${array[i]} < ${array[j]}`);
    } 
    else if ((array[i] == array[j])) {
      console.log(`${array[i]} = ${array[j]}`);
    } 
    else {
      console.log(`${array[i]} > ${array[j]}`);
    }
  }
}
*/

let array = [9, 10 , 150, 3900 ,2 ,5 , 8];
let max = array[0]
let küçük = array [0]
let toplam=0
  for(let i = 0; i < array.length; i++){
    if(max<array[i]){
    max=array[i];
    }

    if(küçük>array[i]){
        küçük=array[i];
    }
    toplam = toplam + array[i]
}


console.log("en küçük eleman", küçük)
console.log("en büyük eleman", max)
console.log("ortalama",toplam/array.length)