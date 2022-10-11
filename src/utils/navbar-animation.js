const $open_btn = document.querySelector("#open-navbar");
const $close_btn = document.querySelector("#close-navbar");
const $navBarElement = document.querySelector(".navbar");

$open_btn.addEventListener("click", () => open_NavBar());

$close_btn.addEventListener("click", () => close_NavBar());

const open_NavBar = () => {
  $navBarElement.style.height = "3rem";
  $navBarElement.style.top = "0";
};

const close_NavBar = () => {
  $navBarElement.style.height = "0";
  $navBarElement.style.top = "-100px";
};
