const $sectionToggle_text = document.querySelector("#section-toggle-text");
const $sectionToggle_btn = document.querySelector("#toggle-btn");
const $x = document.querySelector("#about-author-par");

$sectionToggle_btn.addEventListener("click", () => {
  toggleSection();
  changeInnerText();
});

const toggleSection = () => {
  $x.classList.toggle("about-author__par-holder--visible");
};

const changeInnerText = () => {
  if (
    $sectionToggle_text.innerHTML === "collapse" &&
    $sectionToggle_btn.innerHTML === "expand_less"
  ) {
    $sectionToggle_text.innerHTML = "see more";
    $sectionToggle_btn.innerHTML = "expand_more";
  } else {
    $sectionToggle_text.innerHTML = "collapse";
    $sectionToggle_btn.innerHTML = "expand_less";
  }
};