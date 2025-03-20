  function init() {
    getFromLocalStorage();
    restaurants();
  }
  function restaurants(){
    let restaurantsRef = document.getElementById("restaurants");
    for (let indexRestaurants = 0; indexRestaurants < allRestaurants.length; indexRestaurants++) {
        restaurantsRef.innerHTML += getRestaurantsTemplate(indexRestaurants);
        for (let indexMenu = 0; indexMenu < allRestaurants[indexRestaurants].length; indexMenu++) {
          const element = array[index];
          restaurantsRef.innerHTML += getRestaurantsTemplate(indexRestaurants);
        }
    }
  }
  function saveToLocalStorage() {
    localStorage.setItem("restaurantsLocal", JSON.stringify(allRestaurants));
  }
  
  function getFromLocalStorage() {
    let stored = JSON.parse(localStorage.getItem("restaurantsLocal"));
    if (stored) {allRestaurants = stored}
  }