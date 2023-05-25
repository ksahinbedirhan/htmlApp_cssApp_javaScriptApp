let h1 = document.getElementsByTagName("h1")
for (let i = 0; i < h1.length; i++) {
    console.log(h1[i])
}

// ---------------------------------------------

let num = document.getElementsByClassName('title1')
console.log(num)

// ---------------------------------------------

let num2 = document.getElementById('title3')
console.log(num2);

// ---------------------------------------------

const h4 = document.getElementById('title4');
h4.style.color = 'white';
h4.style.fontSize = '40px';
h4.title = 'selam'

// ---------------------------------------------

const h5=document.getElementById('title5');
h5.setAttribute('style', 'font-size: 45px; color:red')

// ---------------------------------------------
