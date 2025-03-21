function getDishesListTemplate(indexDishes) {
  return `
    <div class="card w-full shadow-sm my-2 p-4 border border-blue-900 rounded-2xl">
      <div class="flex right-0 w-full">
          <button onclick="addDish(${indexDishes})" class="border border-blue-500 rounded-xl py-1 px-2 hover:cursor-pointer">+</button>
      </div>
      <div class="card-body">
        <h2 id="dish${[indexDishes]}" class="text-3xl">${allDishes[indexDishes].dish}</h2>
        <p id="desc${[indexDishes]}">${allDishes[indexDishes].description}</p>
        <p id="price${[indexDishes]}" class="text-right text-2xl">${allDishes[indexDishes].price.toFixed(2)}</p>
      </div>
    </div>
  `
}

function getCartTemplate(indexCart){
  return `
      <div id="cart-item${[indexCart]}" class="flex"> 
        <button class="hover:cursor-pointer">-</button><span id="count${[indexCart]}" class="p-4">${cart.amount}</span><button class="hover:cursor-pointer">+</button><h4 class="p-4">${cart.dish}</h4><p class="py-4"><span>${cart.total.toFixed(2)}</span> €</p>
      </div>
  `
}

function getAddressTemplate(indexDishes){
  return `
    <address id="address-container" class="py-4">
      <h1>Burger Factory</h1>
      <p>Straße 12</p>
      <p>PLZ Ort</p>
    </address>
  `
}

function getRatingTemplate(indexDishes) {
  return `
    <div class="rating">
      <div class="mask mask-star" aria-label="1 star"></div>
      <div class="mask mask-star" aria-label="2 star"></div>
      <div class="mask mask-star" aria-label="3 star" aria-current="true"></div>
      <div class="mask mask-star" aria-label="4 star"></div>
      <div class="mask mask-star" aria-label="5 star"></div>
    </div>
  `
}

/* function getCartTotalTemplate(indexCart) {
  return `
    <div id="sum-container" class="flex flex-wrap justify-between items-center">
      <h4 class="text-xl">Lieferkosten:</h4><p class="text-xl">${cart.deliveryPrice.toFixed(2)} €</p>
      <h4 class="text-xl">Gesamtkosten:</h4><p class="text-xl">${cart.grandTotalPrice.toFixed(2)} €</p>
    </div>
  `
} */