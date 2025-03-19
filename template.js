function getDishTemplate(params) {
  return `
    <div class="card w-full shadow-sm my-2 p-4 border border-blue-900 rounded-2xl">
      <div class="flex right-0 w-full">
          <button class="border border-blue-500 rounded-xl py-1 px-2">+</button>
      </div>
      <div class="card-body">
        <h2 class="text-3xl">Cheesburger</h2>
        <p>Burger mit Rindfleisch, Cheddar und Salat.</p>
        <p class="text-right text-2xl">9.50 €</p>
      </div>
    </div>
  `
}
function getCartTemplate(){
  return `
    <div id="cart-body" class="flex flex-col">
      <h2 class="text-3xl">Warenkorb</h2>
      <div id="cart-item" class="flex "> 
        <button>-</button><span class="p-4">2</span><button>+</button><h4 class="p-4">Cheesburger</h4><p class="py-4"><span>10</span> €</p>
      </div>
    </div>
    <div id="sum-container" class="flex flex-wrap justify-between items-center">
      <h4 class="text-xl">Lieferkosten:</h4><p class="text-xl">3.50 €</p>
      <h4 class="text-xl">Gesamtkosten:</h4><p class="text-xl">100.00 €</p>
    </div>
  `
}
function getAddressTemplate(){
  return `
    <address id="address-container" class="py-4">
      <h1>Burger Factory</h1>
      <p>Straße 12</p>
      <p>PLZ Ort</p>
    </address>
  `
}
