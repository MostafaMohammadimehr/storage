const mybtn = document.getElementById("mybtn");
mybtn.addEventListener("click", () => {
  const myObject = {
    firstname: "mostafa",
    lastname: "mohammadi",
    age: "14",
    ismale: true,
  };
  const myarray = [
    {
      firstname: "ali",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
    {
      firstname: "mammad",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
    {
      firstname: "ahmad",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
    {
      firstname: "akbar",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
    {
      firstname: "mostafa",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
    {
      firstname: "asghar",
      lastname: "mohammadi",
      age: "14",
      ismale: true,
    },
  ];
  localStorage.setItem("Person info array", JSON.stringify(myarray));
  localStorage.setItem("Person info object", JSON.stringify(myObject));
});
