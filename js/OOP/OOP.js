class Insan {
    constructor(Ad, Soyad, Yaş) {
        this.Ad = Ad;
        this.Soyad = Soyad;
        this.Yaş = Yaş
    }
    bilgiler() {
        console.log(
            `Ad: ${this.Ad} 
Soyad: ${this.Soyad} 
Yaş: ${this.Yaş}`
        )
    }
}

const insan1 = new Insan("Bedirhan", "ŞAHİN", 23);
insan1.bilgiler()
const insan2 = new Insan("Umut Eren", "ŞAHİN", 17)
insan2.bilgiler()