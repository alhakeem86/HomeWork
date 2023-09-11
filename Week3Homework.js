const pizzaToppings = ["cheese", "onion", "mushroom", "olives"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings tonight are :");

  for (let topping of pizzaToppings) {
    console.log(topping);
  }
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `I want one ${size} ${crust} crust pizza with toppings ${toppings}`
  );
  let myNewArrays = [size, crust, toppings];

  return myNewArrays;
}
let a = getPizzaOrder("large", "thick", "onion", "mushroom");
console.log(a);

let b = preparepizza(a);
function preparepizza(parameter) {
  console.log(
    "your pizza is cooking... Order up! your pizza order details is :"
  );
  const object1 = {
    size: parameter[0],
    crust: parameter[1],
    toppings: parameter[2]
  };
  return object1;
}
console.log(
  `Size: ${b["size"]}\nCrust: ${b["crust"]} \ntoppings: ${b["toppings"]}`
);

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza["size"]} ${pizza["crust"]} pizza with toppings ${pizza["toppings"]}`
  );
  return pizza;
}
servePizza(b);
