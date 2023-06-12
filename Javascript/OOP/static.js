class Matematik {

    topla(a, b) {
        console.log(a + b)
    }

    çıkar(a, b) {
        console.log(a - b)
    }

    static çarp(a, b) {
        console.log(a * b)
    }

    böl(a, b) {
        console.log(a / b)
    }

}

const matematik = new Matematik();
matematik.topla(5, 4)
matematik.çıkar(8, 4)
Matematik.çarp(10, 7)

// -------------------------------------------------------

class Insan {

    static diller = 10;
    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    write() {
        console.log(this.ad, this.soyad, this.diller)
    }

}
const insan1 = new Insan("bedirhan", "şahin")
insan1.write()
console.log(Insan.diller)