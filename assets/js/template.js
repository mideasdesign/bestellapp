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
        <button class="hover:cursor-pointer">-</button><span id="count${[indexCart]}" class="p-4">${cart[indexCart].amount}</span><button class="hover:cursor-pointer">+</button><h4 class="p-4">${cart[indexCart].dish}</h4><p class="py-4"><span>${cart[indexCart].total.toFixed(2)}</span> €</p>
      </div>
  `
}