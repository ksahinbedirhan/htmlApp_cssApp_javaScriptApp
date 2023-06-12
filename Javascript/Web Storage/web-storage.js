localStorage.setItem('450', 'Bedirhan');
localStorage.setItem('451', 'Uğur');
localStorage.setItem('452', 'Alper');
localStorage.removeItem('450')
let value = localStorage.getItem('451')
console.log(value)



let name1 = ['Bedirhan', 'Uğur', 'Alper', 'Eren'];
sessionStorage.setItem('name', JSON.stringify(name1));
let value2 = JSON.parse(sessionStorage.getItem('name'));
console.log(value2)