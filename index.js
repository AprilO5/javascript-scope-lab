//// ----- Global Variables -----
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";


// ----- Function: Add a Burger -----
function addBurger() {

  // function-scoped variable
  let newBurger = "Flatburger";

  // add burger to the menu array
  burgers.push(newBurger);

}


// ----- Block Scope Example -----
if (true) {

  // block-scoped variable
  let anotherNewBurger = "Maple Bacon Burger";

  // update the burger list
  burgers.push(anotherNewBurger);

}


// ----- Function: Change Featured Drink -----
function changeFeaturedDrink() {

  // update the global drink value
  featuredDrink = "The JavaShake";

}
