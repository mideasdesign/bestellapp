function getDishesListTemplate(indexDishes) {
  let imageUrl = allDishes[indexDishes].img || allDishes[indexDishes].images || './assets/images/default.webp';
  return /* html */`
    <div class="card w-full shadow-sm my-6 border border-red-400 rounded-2xl " style="background-image: url('${imageUrl}'); 
      background-size: cover; background-position: center; background-color:rgba(0,0,0,0.3); background-blend-mode: darken;">
      <div class="flex justify-end indicator-container">
      <button onclick="addDish(${indexDishes})" class="indicator text-2xl text-right rounded-xl py-1 px-4 hover:cursor-pointer btn text-gray-100">+</button>
      </div>
      <div class="h-40 p-4 rounded-lg flex flex-col justify-end">
        <h2 id="dish${indexDishes}" class="text-xl text-gray-100">${allDishes[indexDishes].dish}</h2>
        <p id="desc${indexDishes}" class="text-gray-100">${allDishes[indexDishes].description}</p>
        <p id="price${indexDishes}" class="text-right text-xl text-gray-100">${allDishes[indexDishes].price.toFixed(2)} €</p>
      </div>
    </div>
  `
}

function getCartTemplate(indexCart){
  return /* html */`
    <div id="cart-item${[indexCart]}" class="flex sm:grid sm:grid-cols-5 sm:gap-3 gap-1 content-center"> 
      <div class="content-center sm:col-span-2">
      <button id="trash${[indexCart]}" onclick="toTrash(${[indexCart]})" class="p-1 sm:pr-5"><img src="./assets/icon/trash.svg" alt="delete dish" class="h-3 w-auto hover:cursor-pointer"></button>
        <button onclick="amountMinus(${[indexCart]})" class="hover:cursor-pointer">-</button>
        <span id="count${[indexCart]}" class="p-1">${cart[indexCart].amount}</span>
        <button onclick="amountPlus(${[indexCart]})" class="hover:cursor-pointer">+</button>
      </div>
      <h4 class="p-1 sm:col-span-2">${cart[indexCart].dish}</h4>
      <p class="py-1 text-right"><span>${cart[indexCart].total.toFixed(2)}</span> €</p>
    </div>
  `
};

function getGrandTotalTemplate(grandTotal){
  return /* html */`
    <div id="sum-container" class="grid sm:grid-cols-3 sm:gap-3 mt-5">
      <h4 class="text-m col-span-2">Lieferkosten:</h4><p class="text-m text-right">${3.50.toFixed(2)} €</p>
      <h4 class="text-m col-span-2">Gesamtkosten:</h4><p class="text-m text-right">${grandTotal.toFixed(2)} €</p>
      <button onclick="orderDishes()" class="rounded-2xl text-m mt-4 uppercase text-white cart-btn w-full shadow-sm my-2 p-4 col-span-3 hover:cursor-pointer">jetzt bestellen</button>
    </div>
  `
}
function getGrandTotalMobile(grandTotal){
  return /* html */`
    <div id="sum-container" class="grid grid-cols-3 gap-3 mt-5">
      <h4 class="text-lg col-span-2">Lieferkosten:</h4><p class="text-l text-right">${3.50.toFixed(2)} €</p>
      <h4 class="text-lg col-span-2">Gesamtkosten:</h4><p class="text-l text-right">${grandTotal.toFixed(2)} €</p>
      <button onclick="orderDishes()" class="rounded-2xl text-m mt-4 uppercase text-white cart-btn w-full shadow-sm my-2 p-4 col-span-3 hover:cursor-pointer">jetzt bestellen</button>
    </div>
  `
}