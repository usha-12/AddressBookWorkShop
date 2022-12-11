window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th>Name</th><th>Address</th><th>State</th><th>City</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`
    let addressBookList = createAddressBookJSON();
    for (const person of addressBookList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>${person._name}</td>
    <td>${person._address}</td>
    <td>${person._city}</td>
    <td>${person._state}</td>
    <td>${person._zip}</td>
    <td>${person._phoneNumber}</td>
    <td>
        <img id="${person._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="${person._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookListLocal = [{
            _name: "Usha",
            _address: "Rohini Secter -8",
            _city: "Delhi",
            _state: "New Delhi",
            _zip: "110035",
            _phoneNumber: "7974492345"

        },
        {
            _name: "Tusar",
            _address: "Maharashtra",
            _city: "Maharashtra",
            _state: "MH",
            _zip: "560069",
            _phoneNumber: "7894560389"
        }
    ];
    return addressBookListLocal;
};