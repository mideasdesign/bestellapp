  function init() {
    getLocalStorage();
    restaurants();
  }
  function restaurants(){
    let restaurantsRef = getElementbyID('restaurants');
    for (let indexRestaurants = 0; indexRestaurants < restaurants.length; indexRestaurants++) {
        const element = restaurants[indexRestaurants];
        restaurantsRef.innerHTML += getDishesTemplate(indexRestaurants);
        
    }
  }