class Person {
    constructor(firstname) {
        this.firstname = firstname
    }
    write() {
        console.log(this.firstname)
    }
}

class Student extends Person {
    write2() {
        super.write()
    }
}

const student1 = new Student("Bedirhan");
student1.write2()

// ------------------------------------------------

class Çalışan {

    constructor(name, lastname, salary) {
        this.name = name
        this.lastname = lastname
        this.salary = salary
    }

    bilgiler() {
        console.log(this.name, this.lastname, this.salary)
    }

}

// -------------

class Smarteq extends Çalışan {

    constructor(name, lastname, salary) {
        super(name, lastname, salary);
    }

    bilgiler2() {
        super.bilgiler();
    }

}

const personel1 = new Smarteq("Bedirhan", "Şahin", 2000)
personel1.bilgiler2()


// -------------

class Movita extends Çalışan {

    constructor(name, lastname, salary) {
        super(name, lastname, salary)
    }

    bilgiler3() {
        super.bilgiler()
    }

}

const personel2 = new Movita("Uğur", "Ulupınar", 23)
personel2.bilgiler3()

