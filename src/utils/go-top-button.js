const $goTop_btn = document.querySelector("#go-top-page");

window.addEventListener("scroll", () => showBtn());

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
