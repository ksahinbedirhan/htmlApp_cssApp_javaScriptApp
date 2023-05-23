try {
    let firstName = 'Bedirhan'
    let lastName = 'Şahin'
    let fullName = firstName + ' ' + surname
}
catch (error) {
    console.log(error.message)
}

// --------------------------------------------

let age = prompt('Lütfen yaşınızı giriniz.')
try {
    if (age < 18) throw new Error ('yalan söylüyorsun')
}
catch (Error){
    alert(Error.message)
}

// --------------------------------------------

