const contactForm = document.getElementById("contactForm");
const contactTable = document.querySelector("#contactTable tbody");

contactForm.addEventListener("submit", function (e) {
e.preventDefault();
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;

addContactToTable(name, phone);
contactForm.reset();
});

function addContactToTable(name, phone) {
const row = document.createElement("tr");
row.innerHTML = `<td>${name}</td><td>${phone}</td>`;
contactTable.appendChild(row);
}
