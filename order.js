function init() {
  getFromLocalStorage();
  allDishesItems(); 
  cartIemsList();
  grandTotal();
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
  cart.item[indexCart].dish = inputDishRef.innerText;
  saveToLocalStorage();
  cartIemsList();
  grandTotal();
}

function cartIemsList() {
  let cartIemsListRef = document.getElementById("cart-body");
  cartIemsListRef.innerHTML = "";

  if (cart.item.length === 0) {
    cartIemsListRef.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

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
    cart.item[indexCart].amount = 0;
    }
  saveToLocalStorage();
  cartIemsList();
  grandTotal();
}


function grandTotal(indexCart) {
  let grandTotalRef = document.getElementById("grand-total");
      for (let indexCartItems = 0; indexCartItems < cart.item.length; indexCartItems++) {
        grandTotalRef.innerHTML += getCartTotalTemplate(indexCartItems);
      }
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
  if (cartStored && cartStored.item) {
    cart = cartStored;
  }
}