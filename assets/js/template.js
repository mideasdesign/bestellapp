function getDishesListTemplate(indexDishes) {
  let imageUrl = allDishes[indexDishes].img || allDishes[indexDishes].images || './assets/images/default.webp';
  return /* html */`
    <div class="card w-full shadow-sm my-6 border border-red-400 rounded-2xl " style="background-image: url('${imageUrl}'); 
      background-size: cover; background-position: center; background-color:rgba(0,0,0,0.3); background-blend-mode: darken;">
      <div class="flex justify-end indicator-container">
      <button onclick="addDish(${indexDishes})" class="indicator text-2xl text-right bg-[#a80202] hover:bg-[#790202] transition delay-150 duration-300 ease-in-out hover:scale-125 rounded-xl py-1 px-4 hover:cursor-pointer btn text-gray-100">+</button>
      </div>
      <div class="h-40 p-4 rounded-lg flex flex-col justify-end">
        <h2 id="dish${indexDishes}" class=" text-xl md:text-3xl text-gray-100">${allDishes[indexDishes].dish}</h2>
        <p id="desc${indexDishes}" class="text-gray-100">${allDishes[indexDishes].description}</p>
        <p id="price${indexDishes}" class="text-right text-xl md:text-3xl text-gray-100">${allDishes[indexDishes].price.toFixed(2)} €</p>
      </div>
    </div>
  `
}

function getCartTemplate(indexCart){
  return /* html */`
    <div id="cart-item${[indexCart]}" class="flex items-center"> 
      <div class="flex">
      <button id="trash${[indexCart]}" onclick="toTrash(${[indexCart]})" class="pr-2 text-sm base:text-base">
        <img src="./assets/icon/trash.svg" alt="delete dish" class="h-3 w-auto hover:cursor-pointer"></button>
        <button onclick="amountMinus(${[indexCart]})" class="hover:cursor-pointer text-sm base:text-base">-</button>
        <span id="count${[indexCart]}" class="p-4 text-sm base:text-base">${cart[indexCart].amount}</span>
        <button onclick="amountPlus(${[indexCart]})" class="hover:cursor-pointer base:text-base">+</button>
      </div>
      <div class="flex flex-1 justify-end">
      <h4 class="p-2 text-sm base:text-base">${cart[indexCart].dish}</h4>
      <p class="py-2 pr-4 text-sm base:text-base text-right"><span>${cart[indexCart].total.toFixed(2)}</span> €</p>
      </div>
    </div>
  `
};

function getGrandTotalTemplate(grandTotal){
  return /* html */`
    <div id="sum-container" class="grid grid-cols-3 gap-3 mt-5">
      <h4 class="text-sm lg:text-xl col-span-2">Lieferkosten:</h4><p class="text-sm lg:text-xl text-right">${3.50.toFixed(2)} €</p>
      <h4 class="text-sm lg:text-xl col-span-2">Gesamtkosten:</h4><p class="text-sm lg:text-xl text-right">${grandTotal.toFixed(2)} €</p>
      <button onclick="orderDishes()" class="rounded-2xl text-sm base:text-base mt-7 uppercase text-white cart-btn w-full shadow-sm  p-3 col-span-3 hover:cursor-pointer">jetzt bestellen</button>
      <button onclick="shopping()" class="base:hidden rounded-2xl text-sm base:text-base mt-2 uppercase text-white cart-btn w-full shadow-sm p-3 col-span-3 hover:cursor-pointer">weiter einkaufen</button>
    </div>
  `
}
function getMiniIndicatorTemplate(grandTotal) {
  return /* html */`
    <p class="text-sm mbase:text-xl">Warbenkorb ${grandTotal.toFixed(2)} €</p>
  `
}