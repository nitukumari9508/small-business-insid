
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {
alert("All fields are required");
} else alert("Thank you " + name + ", for contacting us. Your message has been sent.");

})