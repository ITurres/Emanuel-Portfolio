const $open_btn = document.querySelector("#open-top-navbar");
const $close_btn = document.querySelector("#close-top-navbar");

$open_btn.addEventListener("click", () => {
  open_NavBar();
});

$close_btn.addEventListener("click", () => {
  close_NavBar();
});

const open_NavBar = () => {
  document.querySelector(".top-navbar").style.height = "3rem";
  document.querySelector(".top-navbar").style.top = "0";
};

const close_NavBar = () => {
  document.querySelector(".top-navbar").style.height = "0";
  document.querySelector(".top-navbar").style.top = "-100px";
};
