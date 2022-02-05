

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("pan", "white sauce", ["4 cheese"], ["beef", "onions", "mushrooms"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "spicy tomato", ["cheddar"], ["chicken", "pineapple", "chickpeas"]);
console.log(pizza4);


// Bonus challenge - random pizza using Math.random()

function randomPizza() {
    var crustType = ["deep dish", "hand tossed", "thin crust", "pan"];
    var sauceType = ["traditional", "marinara", "white sauce", "spicy tomato"];
    var cheeses = ["mozzarella", "feta", "4 cheese", "cheddar", "blue cheese"];
    var toppings = [
      "beef",
      "chicken",
      "salami",
      "pepperoni",
      "mushrooms",
      "olives",
      "onions",
      "pineapple",
      "chickpeas",
      "anchovies",
      "spinach",
    ];
    var pizzaa = {};
    pizzaa.crust = crustType[Math.floor(Math.random() * (crustType.length))];
    pizzaa.sauce = sauceType[Math.floor(Math.random() * (sauceType.length))];
    pizzaa.cheese = cheeses[Math.floor(Math.random() * (cheeses.length))];
    pizzaa.topping = toppings[Math.floor(Math.random() * (toppings.length))];
    return pizzaa;
}

console.log("Our random pizza of the day is: " + JSON.stringify(randomPizza())); 

