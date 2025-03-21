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
  return /* html */`
    <div id="cart-item${[indexCart]}" class="grid grid-cols-4 gap-3 content-center"> 
      <div class="content-center">
        <button onclick="amountMinus(${[indexCart]})" class="hover:cursor-pointer">-</button>
        <span id="count${[indexCart]}" class="p-4">${cart[indexCart].amount}</span>
        <button onclick="amountPlus(${[indexCart]})" class="hover:cursor-pointer">+</button>
      </div>
      <h4 class="p-2 col-span-2">${cart[indexCart].dish}</h4>
      <p class="py-2 text-right"><span>${cart[indexCart].total.toFixed(2)}</span> €</p>
    </div>
  `
};

function getGrandTotalTemplate(grandTotal){
  return /* html */`
    <div id="sum-container" class="grid grid-cols-3 gap-3 mt-5">
      <h4 class="text-lg col-span-2">Lieferkosten:</h4><p class="text-xl text-right">${3.50.toFixed(2)} €</p>
      <h4 class="text-lg col-span-2">Gesamtkosten:</h4><p class="text-xl text-right">${grandTotal.toFixed(2)} €</p>
    </div>
  `
}