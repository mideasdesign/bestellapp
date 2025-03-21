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


function addDish(indexDishes, indexCart) {
  let inputDishRef = document.getElementById(`dish${[indexDishes]}`);
  let inputPriceRef = document.getElementById(`price${[indexDishes]}`);

  cart.item[indexCart].amount++;
  cart.item[indexCart].total += parseFloat(inputPriceRef.value);
  saveToLocalStorage();
  cartIemsList();
}

function cartIemsList() {
  let cartIemsListRef = document.getElementById("cart-body");
  cartIemsListRef.innerHTML = "";
  for (let indexCart = 0; indexCart < cart.item.length; indexCart++) {
    cartIemsListRef.innerHTML += getCartTemplate(indexCart);
  }
}

function countAmount(indexCart) {
  let amountcountRef = document.getElementById(`count${[indexCart]}`);
  let amountcount = amountcountRef.value;
  if (amountcount  >= 0) {
    cart.item[indexCart].amount = Math.max(0, cart.item[indexCart].amount + 1);
  } else {
    cart.item[indexCart].amount--;
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
  localStorage.setItem("cartLocal", JSON.stringify(cart));
}

function getFromLocalStorage() {
  let stored = JSON.parse(localStorage.getItem("dishesLocal"));
  if (stored) {
    allDishes = stored; 
  }
  let cartStored = JSON.parse(localStorage.getItem("cartLocal"));
  if (cartStored) {
    cart = cartStored; 
  }
}