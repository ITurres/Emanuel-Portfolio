const $profileTitle = document.querySelector("#profile-title");
const $profileSubtitle = document.querySelector("#profile-subtitle");
const profileTitle = "Hi! I am Emanuel Iturres";
const newProfileTitle = profileTitle.split("");
const interval = 200;
const showTitle = [];
let underscore = "_";

window.setTimeout(() => {
  showTitleOnDom();
}, 500);

function showTitleOnDom() {
  newProfileTitle.forEach((elem, index) => {
    setTimeout(() => {
      showTitle.push(elem);
      $profileTitle.innerHTML = `${showTitle.join("")}${underscore}`;
      if (showTitle.length === newProfileTitle.length) {
        removeUnderscore();
        $profileSubtitle.classList.add("show__subtitle");
      }
    }, index * interval);
  });
}

function removeUnderscore() {
  underscore = "";
  $profileTitle.innerHTML = showTitle.join("") + underscore;
}
