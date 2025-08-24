document.addEventListener("DOMContentLoaded", () => {
  let serachform = document.querySelector(".serach-form");
  document.querySelector("#search-btn").onclick = () => {
    serachform.classList.toggle("active");
  };

  let shoppingcart = document.querySelector(".shopping-cart");
  document.querySelector("#cart-btn").onclick = () => {
    shoppingcart.classList.toggle("active");
  };
});
