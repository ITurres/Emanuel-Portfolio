const $open_btn = document.querySelector("#open-navbar");
const $close_btn = document.querySelector("#close-navbar");

$open_btn.addEventListener("click", () => {
  open_NavBar();
});

$close_btn.addEventListener("click", () => {
  close_NavBar();
});

const open_NavBar = () => {
  document.querySelector(".navbar").style.height = "3rem";
  document.querySelector(".navbar").style.top = "0";
};

const close_NavBar = () => {
  document.querySelector(".navbar").style.height = "0";
  document.querySelector(".navbar").style.top = "-100px";
};
