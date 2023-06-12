const map1 = new Map();

map1.set(1, "Adana")
map1.set(6, "Ankara")
map1.set(34, "İstanbul")

console.log(map1.get(6));
console.log(map1.size);
console.log(map1.delete(1));
console.log(map1.get(1));
console.log(map1.has(34));
for (let [key, value] of map1) {
    console.log[key, value]
}
console.log(map1.keys())
console.log(map1.values())

// ---

const values = Array.from(map1.values())

values.forEach(value => console.log(value));

for (let value1 of values){
    console.log(value1)
}

// ---

// ------------------------------------------------

const set1 = new Set();

set1.add(true)
set1.add(7)
set1.add("Bedo")
set1.add("Bedo")
set1.add("Kamuran")


console.log(set1.size)
console.log(set1.delete("Bedo"))
console.log(set1.size)

for(let value of set1){
    console.log(value)
}

