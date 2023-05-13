let n = parseInt(prompt("Kaç adet Fibonacci sayısı istiyorsun?"));
let fibonacci = [0, 1];
for (let i=2; i <=n; i++){
    fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
}
console.log(fibonacci);