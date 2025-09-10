const title = document.getElementById("title");
const mybtn = document.getElementById("mybtn");
let input = document.getElementById("input");

mybtn.addEventListener("click", () => {
  let inputvalue = input.value.trim();
  localStorage.setItem("firstname", inputvalue);
  let firstname = localStorage.getItem("firstname");

  if (inputvalue) {
    title.innerText = `خوش آمدید آقا ${firstname}`;
  } else {
    title.innerText = `نام شما یافت نشد دوباره تلاش کنید.`;
  }
});
