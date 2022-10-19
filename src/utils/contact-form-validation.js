const $inputs = document.querySelectorAll(".input-icon--holder");
const $checkedIcons = document.querySelectorAll(".check-icon");

const patterns = {
  name: /^[a-zA-Z]{3,30}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  subject: /^[\w\s]{2,}$/,
  message: /^[\w\s]{20,}$/,
};

const validate = (inputField, regex, inputFieldHolder) => {
  if (regex.test(inputField.value)) {
    inputFieldHolder.classList.remove("invalid");
    inputFieldHolder.classList.add("valid");
    inputFieldHolder.children[2].classList.add("visible");
    inputFieldHolder.children[2].classList.remove("hidden");
  } else if (inputField.value === "") {
    inputFieldHolder.classList.remove("valid");
    inputFieldHolder.classList.remove("invalid");
  } else {
    inputFieldHolder.classList.remove("valid");
    inputFieldHolder.classList.add("invalid");
    inputFieldHolder.children[2].classList.remove("visible");
    inputFieldHolder.children[2].classList.add("hidden");
  }
};

$inputs.forEach((element) => {
  element.addEventListener("keyup", (event) => {
    validate(
      event.target,
      patterns[event.target.getAttribute("data-type")],
      element
    );
  });
});
