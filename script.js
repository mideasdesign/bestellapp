function init() {
  getFromLocalStorage();
  allDishesItems(); 
  cartItemsList();
  grandTotal();
  miniIndicator();
};

function renderAll() {
  saveToLocalStorage();
  cartItemsList();
  grandTotal();
};

function allDishesItems() {
  let dishesRef = document.getElementById("restaurants");
  dishesRef.innerHTML = "";
  for (let indexDishes = 0; indexDishes < allDishes.length; indexDishes++) {  
    dishesRef.innerHTML += getDishesListTemplate(indexDishes);
  }
};

function cartItemsList() {
  let cartItemsListRef = document.getElementById('cart-items');
cartItemsListRef.innerHTML = "";
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
  cartItemsListRef.innerHTML += getCartTemplate(indexCart);
  }
};

function addDish(indexDishes) {
  let inputDishRef = allDishes[indexDishes].dish;
  let inputPriceRef = allDishes[indexDishes].price;
  let dishExist = cart.find(item => item.dish === inputDishRef);
  if (dishExist) {
    dishExist .amount++;
    dishExist .total += inputPriceRef;
  } else {
    let newItem = {
      dish: inputDishRef,
      total: inputPriceRef,
      amount: 1
    };
    cart.push(newItem);
  };
  renderAll();
};

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

function grandTotal() {
  let grandTotalRef = document.getElementById("grand-total");
  grandTotalRef.innerHTML = "";
  let totalSum = cart.reduce((sum, item) => sum + item.total, 0);
  let grandTotal = totalSum + 3.50;
  grandTotalRef.innerHTML += getGrandTotalTemplate(grandTotal);
  saveToLocalStorage();
cartItemsList();
}

function amountPlus(indexCart) {
  cart[indexCart].amount++;
  cart[indexCart].total += cart[indexCart].total / (cart[indexCart].amount - 1); 
  renderAll();
}

function amountMinus(indexCart) {
  if (cart[indexCart].amount > 1) {
    cart[indexCart].total -= cart[indexCart].total / cart[indexCart].amount; 
    cart[indexCart].amount--;
  } else {
    cart.splice(indexCart, 1);
  };
  renderAll();
}

function toTrash(indexCart){
  cart.splice(indexCart, 1);
  localStorage.removeItem("cartLocal");
  renderAll();
}

function orderDishes() {
  localStorage.clear();
  modalOverlay();
};

function modalOverlay(event){
  let toggleRef = document.getElementById('order-modal')
  toggleRef.classList.toggle('close');
}

function shopping(event){
  let toggleRef = document.getElementById('cart-container')
  toggleRef.classList.toggle('close-cart');
}

function miniIndicator(indexCart) {
  let indicator = document.getElementById('mini-indicator');
  let totalSum = cart.reduce((sum, item) => sum + item.total, 0);
  let grandTotal = totalSum + 3.50;
  indicator.innerHTML += getMiniIndicatorTemplate(grandTotal);
}

function reloadPage() {
  location.reload();
}