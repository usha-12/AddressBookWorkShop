let addressBookList;
window.addEventListener("DOMContentLoaded", (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}


const createInnerHtml = () => {
    const headerHtml = "<tr><th>Name</th><th>Address</th><th>State</th><th>City</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th></tr>"
    if (addressBookList.length == 0) return;
    let innerHtml = `${headerHtml}`
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

function remove(employeePayrollList) {
    localStorage.removeItem(employeePayrollList);
}