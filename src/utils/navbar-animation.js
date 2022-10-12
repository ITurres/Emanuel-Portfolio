const $open_btn = document.querySelector("#open-navbar");
const $close_btn = document.querySelector("#close-navbar");
const $navBarElement = document.querySelector(".navbar");

$open_btn.addEventListener("click", () => open_NavBar());

$close_btn.addEventListener("click", () => close_NavBar());

const open_NavBar = () => {
  if (window.innerWidth > 480) {
    //480 is the breakpoint on @media//
    $navBarElement.style.height = "3rem";
  } else {
    $navBarElement.style.height = "fit-content";
  }
  $navBarElement.style.top = "0";
};

const close_NavBar = () => {
  $navBarElement.style.height = "0";
  $navBarElement.style.top = "-100px";
};
