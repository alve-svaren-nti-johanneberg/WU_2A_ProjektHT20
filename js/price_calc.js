"use strict";

/** @type {HTMLInputElement[]} */
var elements;
var priceElement = document.querySelector("#price");

function updateElements() {
    elements = document.querySelectorAll("#content li input[data-price]");
}

/** @param {InputEvent} e */
function updatePrice() {
    updateElements();

    var totalPrice = 0;
    for (const element of elements) {
        var price = parseInt(element.getAttribute("data-price"));
        var times = element.valueAsNumber;
        totalPrice += price * times;
    }
    priceElement.textContent = "Total: " + totalPrice + " kr";
}

updateElements();
updatePrice();
for (const element of elements) {
    element.addEventListener("change", updatePrice);
}
