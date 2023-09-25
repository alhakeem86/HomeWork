const form = document.querySelector("form");
//create a variable with a value that comes from a query selector
form.addEventListener("submit", event => {
  //query the DOM for the "form" tag and  adding an event listener "submit" event and a function
  event.preventDefault();
  //prevent an events behavior from happening
  console.log("The form was submitted!");

  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);

  Array.from(inputs).forEach(input => {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  });
});
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
