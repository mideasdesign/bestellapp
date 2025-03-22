function init() {
  getFromLocalStorage();
  allDishesItems(); 
  cartIemsList();
  grandTotal();
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
  cartIemsListRef.innerHTML = "";
  for (let indexCart = 0; indexCart < cart.length; indexCart++) {
    cartIemsListRef.innerHTML += getCartTemplate(indexCart);
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
  saveToLocalStorage();
  cartIemsList();
  grandTotal();
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

function grandTotal(indexCart) {
  let grandTotalRef = document.getElementById("grand-total");
  let totalSum = cart.reduce((sum, item) => sum + item.total, 0);
  let grandTotal = totalSum + 3.50; 
  let grandTotalPrice = {
      grandTotal: grandTotal,
  }
  cart.grandTotalPrice = grandTotalPrice;

  // Aktualisiert die Anzeige
  grandTotalRef.innerHTML = `
    <div id="sum-container" class="flex flex-wrap justify-between items-center">
      <h4 class="text-xl">Lieferkosten:</h4><p class="text-xl">${3.50.toFixed(2)} €</p>
      <h4 class="text-xl">Gesamtkosten:</h4><p class="text-xl">${grandTotal.toFixed(2)} €</p>
    </div>
  `;
  saveToLocalStorage();
  cartIemsList();
}