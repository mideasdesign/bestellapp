function init() {
  getFromLocalStorage();
  allDishesItems(); 
  cartIemsList();
}

function allDishesItems() {
  let dishesRef = document.getElementById("restaurants-container");

  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < allDishes.length; indexDishes++) {  
    dishesRef.innerHTML += getDishesListTemplate(indexDishes);
  }
}

function addDishes(indexDishes) {
  let dishItem = allDishes[indexDishes].dish;
  cart[indexCart].dish.push(dishItem);
  saveToLocalStorage();
  cartIemsList();
}

function cartIemsList() {
  let cartIemsListRef = document.getElementById("cart-body");
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    cartIemsListRef.innerHTML += getCartTemplate(indexCart);

  }
}

function countAmount(indexCart) {
  let amountcountRef = document.getElementById(`count${[indexCart]}`);
  let amountcount = amountcountRef.value;
  if (amountcount  >= 0) {
    cart[indexCart].amount = 0;
  } else {
    cart[indexCart].amount++;
    }
  saveToLocalStorage();
  cartIemsList();
}


function grandTotal(indexCart) {
  let grandTotalRef = document.getElementById("grand-Total");
      for (let cartItems = 0; cartItems < indexCart.length; cartItems++) {
      }
      grandTotalRef.innerHTML += getCartTotalTemplate(indexCart);
}

function saveToLocalStorage() {
  localStorage.setItem("dishesLocal", JSON.stringify(allDishes));
}

function getFromLocalStorage() {
  let stored = JSON.parse(localStorage.getItem("dishesLocal"));
  if (stored) {
    allDishes = stored; 
  }
  let cartStored = JSON.parse(localStorage.getItem("cartLocal"));
  if (cartStored) {
    cart = stored; 
  }
}