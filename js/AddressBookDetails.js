class AddressBookDetails {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = /^[A-Z][a-z]{2,}/;
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Invalid Name";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let sentence = address.split(" ");
        const addressRegex = /^([A-Za-z0-9/,-]{3,}[ ]?)+$/;
        for (const word of sentence) {
            if (!addressRegex.test(word))
                throw "Invalid Address";
        }
        this._address = address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid Number";
    }

    toString() {
        return "Id: " + this.id + "\nName: " + this.name + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNumber;
    }

    
}