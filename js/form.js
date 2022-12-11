let addressBookContactJSONObject = {};
let isUpdate = false;
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
    checkForUpdate();
});

const saveForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setAddressBookObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(siteProperties.homePage);
    } catch (e) {
        return;
    }
}

const setAddressBookObject = () => {
    addressBookContactJSONObject._name = getInputValueById('#name');
    addressBookContactJSONObject._address = getInputValueById('#address');
    addressBookContactJSONObject._city = getInputValueById('#city');
    addressBookContactJSONObject._state = getInputValueById('#state');
    addressBookContactJSONObject._zip = getInputValueById('#zip');
    addressBookContactJSONObject._phoneNumber = getInputValueById('#phoneNo');
    // alert("Added Json Object : " + addressBookContactJSONObject._name);
};

function createAndUpdateStorage() {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        let person = addressBookList.find(per => per._id == addressBookContactJSONObject._id);
        if (!person) addressBookList.push(createAddressBook());
        else {
            const index = addressBookList.map(per => per._id).indexOf(person._id);
            addressBookList.splice(index, 1, createAddressBookData(person._id));
        }
    } else {
        addressBookList = [createAddressBook()];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const createAddressBook = () => {
    let addressBook = new AddressBookDetails();
    addressBook.id = createNewId();
    addressBook.name = document.getElementById("name").value;
    addressBook.address = document.getElementById("address").value;
    addressBook.city = document.getElementById("city").value;
    addressBook.state = document.getElementById("state").value;
    addressBook.zip = document.getElementById("zip").value;
    addressBook.phoneNumber = document.getElementById("phoneNo").value;
    // alert(addressBook.toString());
    return addressBook;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const resetForm = () => {
    setValue('#name', "");
    setValue('#address', "");
    setValue('#city', "");
    setValue('#state', "");
    setValue('#zip', "");
    setValue('#phoneNo', "");
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
};

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem("editPerson");
    isUpdate = addressBookJson ? true : false;
    if (!isUpdate) return;
    addressBookContactJSONObject = JSON.parse(addressBookJson);
    setForm();
};

const setForm = () => {
    setValue("#name", addressBookContactJSONObject._name);
    setValue("#address", addressBookContactJSONObject._address);
    setValue("#city", addressBookContactJSONObject._city);
    setValue("#state", addressBookContactJSONObject._state);
    setValue("#zip", addressBookContactJSONObject._zip);
    setValue("#phoneNo", addressBookContactJSONObject._phoneNumber);
};

const createAddressBookData = (id) => {
    let addressBook = new AddressBookDetails();
    if (!id) addressBook.id = createNewId();
    else addressBook.id = id;
    setBookData(addressBook);
    return addressBook;
};

const setBookData = (addressBook) => {
    try {
        addressBook.name = addressBookContactJSONObject._name;
    } catch (e) {
        setTextValue(".text-error", e);
        throw e;
    }
    try {
        addressBook.address = addressBookContactJSONObject._address;
    } catch (e) {
        setTextValue(".address-error", e);
        throw e;
    }
    addressBook.city = addressBookContactJSONObject._city;
    addressBook.state = addressBookContactJSONObject._state;
    addressBook.zip = addressBookContactJSONObject._zip;
    try {
        addressBook.phoneNumber = addressBookContactJSONObject._phoneNumber;
    } catch (e) {
        setTextValue(".phoneNo-error", e);
        throw e;
    }
};
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

const createNewId = () => {
    let personId = localStorage.getItem("AddressBookID");
    personId = !personId ? 1 : (parseInt(personId) + 1).toString();
    localStorage.setItem("AddressBookID", personId);
    return personId;
};