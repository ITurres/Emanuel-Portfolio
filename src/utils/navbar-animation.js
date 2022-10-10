const $open_btn = document.querySelector("#open-top-navbar");

$open_btn.addEventListener("click", () => {
  open_NavBar();
});

const open_NavBar = () => {
  document.querySelector(".top-navbar").style.height = "3rem";
  document.querySelector(".top-navbar").style.top = "0";
};
