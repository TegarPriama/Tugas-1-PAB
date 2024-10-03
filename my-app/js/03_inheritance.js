console.log("------ Inheritance ------");

class Gadget {
    constructor(name) {
        this.name = name;
    }

    present() {
        return "I have a " + this.name;
    }
}

class Handphone extends Gadget {
    constructor(name, model) {
        super(name);
        this.model = model;
    }

    show() {
        return this.present() + ", it is the " + this.model;
    }
}

let handphone = new Handphone("iPhone", "14 Pro Max");

console.log(handphone.show());
