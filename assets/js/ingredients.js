const amountOf = [0.25, 0.25, 0.5, 62.5, 100, 37.5, 100, 100];
function calcIngredients(item, index, value) {
  let contentRef = document.getElementsByClassName("item");
  for (let index = 0; index < amountOf.length; index++) {
    let amount = document.getElementById("portion").value;
    let singleRef = amountOf[index] * amount;
    if (singleRef < 0) {
      let alertMg = document.getElementById("altert");
      alertMg.classList.add("show");
    } else {
      let alertMg = document.getElementById("altert");
      alertMg.classList.remove("show");
      contentRef[index].innerText = singleRef;
    }
  }
}
