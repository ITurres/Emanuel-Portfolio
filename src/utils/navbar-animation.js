const $open_btn = document.querySelector("#open-navbar");
const $close_btn = document.querySelector("#close-navbar");
const $navBarElement = document.querySelector(".navbar");

window.addEventListener("load", () => close_NavBar()); //prevents navbar to open -auto- when loads on certain mobiles//

$open_btn.addEventListener("click", () => open_NavBar());

$close_btn.addEventListener("click", () => close_NavBar());

const open_NavBar = () => {
  $open_btn.style.opacity = "0";
  if (window.innerWidth > 600) {
    //600 is the breakpoint on @media//
    $navBarElement.style.height = "3rem";
  } else {
    $navBarElement.style.height = "fit-content";
  }
  $navBarElement.style.top = "0";
};

export const close_NavBar = () => {
  $open_btn.style.opacity = "1";
  $navBarElement.style.height = "0";
  $navBarElement.style.top = "-100px";
};
