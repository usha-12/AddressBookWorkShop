let addressBookContactJSONObject = {};
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameOutput = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            nameOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookDetails()).name = name.value;;
            nameOutput.textContent = "";
        } catch (e) {
            nameOutput.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressOutput = document.querySelector('.address-error');
    addressOutput.textContent = address.value;
    address.addEventListener('input', function() {
        if (address.value.length == 0) {
            addressOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookDetails()).address = address.value;;
            addressOutput.textContent = "";
        } catch (e) {
            addressOutput.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNo');
    const phoneOutput = document.querySelector('.phoneNo-error');
    phoneOutput.textContent = phoneNumber.value;
    phoneNumber.addEventListener('input', function() {
        if (phoneNumber.value.length == 0) {
            phoneOutput.textContent = "";
            return;
        }
        try {
            (new AddressBookDetails()).phoneNumber = phoneNumber.value;;
            phoneOutput.textContent = "";
        } catch (e) {
            phoneOutput.textContent = e;
        }
    });
});

const saveForm = () => {
    try {
        let addressBook = createAddressBook();
        createAndUpdateStorage(addressBook);
        window.location.replace(site_properties.home_page);
    } catch (e) {
        return
    }
}

const createAddressBook = () => {
    let addressBook = new AddressBookDetails();
    try {
        addressBook.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        addressBook.address = getInputValueById('#address');
    } catch (e) {
        setTextValue('.address-error', e);
        throw e;
    }
    addressBook.city = document.getElementById("city").value;
    addressBook.state = document.getElementById("state").value;
    addressBook.zip = getInputValueById('#zip');
    try {
        addressBook.phoneNumber = getInputValueById('#phoneNo');
    } catch (e) {
        setTextValue('.phoneNo-output', e);
        throw e;
    }
    alert(addressBook.toString());
    return addressBook;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

function createAndUpdateStorage(addressBook) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBook);
    } else {
        addressBookList = [addressBook];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const setaddressBookJSONObject = () => {
    addressBookContactJSONObject._name = getInputValueById('#name');
    addressBookContactJSONObject._address = getInputValueById('#address');
    addressBookContactJSONObject._city = getInputValueById('#city');
    addressBookContactJSONObject._state = getInputValueById('#state');
    addressBookContactJSONObject._zip = getInputValueById('#zip');
    addressBookContactJSONObject._phoneNumber = getInputValueById('#phoneNo');
    alert("Added Json Object : " + addressBookContactJSONObject._name);
};