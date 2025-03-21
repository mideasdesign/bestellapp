function init() {
  getFromLocalStorage();
  allDishesItems(); 
  cartIemsList();
};

function allDishesItems() {
  let dishesRef = document.getElementById("restaurants-container");
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < allDishes.length; indexDishes++) {  
    dishesRef.innerHTML += getDishesListTemplate(indexDishes);
  }
};

function cartIemsList() {
  let cartIemsListRef = document.getElementById('cart-body');
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    cartIemsListRef.innerHTML += getCartTemplate(indexCart);
  }
}


function addDish(indexDishes, indexCart) {
  let inputDishRef = allDishes[indexDishes].dish;
  let inputPriceRef = allDishes[indexDishes].price;
  if (allDishes[indexDishes].dish == cart.dish) {
    let newItem = cart.amount++;
    cart.push(newItem);
  }
  else{
    let newItem = {
    dish: inputDishRef,
    total: inputPriceRef,
    amount: 1
    };
    cart.push(newItem);
  };
  saveToLocalStorage();
  cartIemsList();
  grandTotal();
};

function countAmount(indexCart) {
  let amountcountRef = document.getElementById(`count${[indexCart]}`);
  if (cart.amount  >= 0) {
   amountcountRef = cart[indexCart].amount = Math.max(0, cart[indexCart].amount + 1);
  } else {
    cart[indexCart].amount = 0;
    }
  saveToLocalStorage();
  cartIemsList();
  grandTotal();
}


function grandTotal(indexCart) {
  let grandTotalRef = document.getElementById("grand-total");
      for (let indexCartItems = 0; indexCartItems < cart.length; indexCartItems++) {
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
  if (cartStored && cartStored) {
    cart = cartStored;
  }
}