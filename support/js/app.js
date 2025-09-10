const h1 = document.getElementById("title");
const firstName = localStorage.getItem("firstName");

localStorage.setItem("firstName", "Mostafa");
localStorage.setItem("lasName", "Mohammadimehr");
// localStorage.removeItem("firstName");
firstName
  ? (h1.innerText = `welcom  : ${firstName} `)
  : (h1.innerText = `no body to welcom`);
