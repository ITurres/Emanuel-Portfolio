import { close_NavBar } from "./navbar-animation.js";

const $goTop_btn = document.querySelector("#go-top-page");

window.addEventListener("scroll", () => showBtn());
$goTop_btn.addEventListener("click", () => close_NavBar());

const showBtn = () => {
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    $goTop_btn.style.display = "flex";
  } else {
    $goTop_btn.style.display = "none";
  }
};
