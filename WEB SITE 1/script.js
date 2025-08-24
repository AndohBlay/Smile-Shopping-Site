document.addEventListener("DOMContentLoaded", () => {
  //header section with all navigation
  let serachform = document.querySelector(".serach-form");
  document.querySelector("#search-btn").onclick = () => {
    serachform.classList.toggle("active");
    shoppingcart.classList.remove("active");
    Loginform.classList.remove("active");
    navbar.classList.remove("active");
  };

  let shoppingcart = document.querySelector(".shopping-cart");
  document.querySelector("#cart-btn").onclick = () => {
    shoppingcart.classList.toggle("active");
    searchform.classList.remove("active");
    Loginform.classList.remove("active");
    navbar.classList.remove("active");
  };
  let Loginform = document.querySelector(".Login-form");
  document.querySelector("#login-btn").onclick = () => {
    Loginform.classList.toggle("active");
    shoppingcart.classList.remove("active");
    searchform.classList.remove("active");
    navbar.classList.remove("active");
  };
  let navbar = document.querySelector(".navbar");
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    shoppingcart.classList.remove("active");
    searchform.classList.remove("active");
    Loginform.classList.remove("active");
  };

  window.onscroll = () => {
    shoppingcart.classList.remove("active");
    searchform.classList.remove("active");
    Loginform.classList.remove("active");
    navbar.classList.remove("active");
  };
  // header ends
});
