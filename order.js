function init() {
  getFromLocalStorage();
  allDishesItems(); 
}

function allDishesItems() {
  let dishesRef = document.getElementById("restaurants-container");

  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < allDishes.length; indexDishes++) {  
    dishesRef.innerHTML += getDishesListTemplate(indexDishes);
  }
}

function cartIemsList() {
  let cartIemsListRef = document.getElementById("cart-body");
for (let indexCart = 0; indexCart < cart.length; indexCart++) {
  const element = array[indexCart];
  cartIemsListRef.innerHTML += getDishesListTemplate(indexCart);
  
}
  
}

function saveToLocalStorage() {
  localStorage.setItem("dishesLocal", JSON.stringify(allDishes));
}

function getFromLocalStorage() {
  let stored = JSON.parse(localStorage.getItem("dishesLocal"));
  if (stored) {
    allDishes = stored; 
  }
}