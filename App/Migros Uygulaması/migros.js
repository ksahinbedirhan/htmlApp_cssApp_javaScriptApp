
let toplamTutar = prompt("Lütfen toplam tutarı sayı olarak giriniz.");

// -----------------------------------------------------------------------------

class MoneyCard {

    constructor(name, lastname) {

        this.name = name;
        this.lastname = lastname;

    }

    migros() {

        console.log(this.name, this.lastname);

    }
}

class Müşteri1 extends MoneyCard {

    constructor(name, lastname) {

        super(name, lastname);

    }

    migros() {

        super.migros();

    }
}

class Müşteri2 extends MoneyCard {

    constructor(name, lastname) {

        super(name, lastname);

    }

    migros() {

        super.migros();

    }
}

class Müşteri3 extends MoneyCard {

    constructor(name, lastname) {

        super(name, lastname);
    }

    migros() {

        super.migros();
    }
}

// -----------------------------------------------------------------------------

function prompt1() {

    if (!isNaN(toplamTutar)) {

        let migrosMoney = prompt("Migros Money Kartınız var mı? \n1-Evet \n2-Hayır");

        if (migrosMoney === "1") {

            let adSoyad = prompt("Lütfen adınızı ve soyadınızı giriniz.");

            const bedirhan = new Müşteri1("bedirhan", "şahin");
            const eren = new Müşteri3("eren", "şahin");
            const uğur = new Müşteri2("uğur", "ulupınar");

            if (adSoyad === `${bedirhan.name} ${bedirhan.lastname}`) {

                alert(`"Ödenecek toplam tutar": ${toplamTutar - (toplamTutar * 0.1)}`);

            }

            else if (adSoyad === `${eren.name} ${eren.lastname}`) {

                alert(`"Ödenecek toplam tutar": ${toplamTutar - (toplamTutar * 0.1)}`);

            }

            else if (adSoyad === `${uğur.name} ${uğur.lastname}`) {

                alert(`"Ödenecek toplam tutar": ${toplamTutar - (toplamTutar * 0.1)}`);

            }

            else {

                alert(`"Money kartınız bulunamadı. Ödenecek toplam tutar:" ${toplamTutar}`);

            }
        }

        else {

            alert(`"Ödemeniz gereken tutar: ${toplamTutar}`);

        }
    }

    else {

        alert("Sayı olarak giriniz!");

    }
}

prompt1();