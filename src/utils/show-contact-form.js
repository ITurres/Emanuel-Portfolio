const $CTA = document.querySelector("#call-to-action");
const $CTA_btn = document.querySelector("#call-to-action-btn");
const $hiddenFieldset = document.querySelector(".fieldset--hidden");

$CTA_btn.addEventListener("click", () => showContactForm());

const showContactForm = () => {
  $CTA.style.display = "none";
  $hiddenFieldset.classList.add("fieldset--show");
};
 