const input = document.getElementById("input");
const form = document.querySelector("form");
const submit = document.getElementById("mybtn");
const removename = document.getElementById("removename");
const title = document.getElementById("title");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
submit.addEventListener("click", () => {
  sessionStorage.setItem("name", input.value);
  if (input.value) {
    let firstname = sessionStorage.getItem("name");
    title.innerText = `خوش آمدید آقا ${firstname}`;
  } else {
    title.innerText = `نام شما یافت نشد دوباره تلاش کنید.`;
  }
});
removename.addEventListener("click", () => {
  sessionStorage.removeItem("name");
  title.innerText = `لطفا اسم خود را وارد کنید :`;
});
