// let carts = document.querySelectorAll(".cart");

// function addtocart() {
//     cart.classList.add("after-cart");
//     cart.textContent = "Item added";
// }


// Select all "Add to Cart" buttons
let buttons = document.querySelectorAll(".cart");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Find the cart <p> inside the same product
    let cart = this.parentElement.querySelector(".cart");

    // Change text content
    cart.textContent = "Item added";

    // Switch classes
    // cart.classList.remove("after-cart");
    cart.classList.add("after-cart");
  });
});