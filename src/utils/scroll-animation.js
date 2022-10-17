const $hiddenProjects = document.querySelectorAll(".project--hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("project--show");
      delayTransitionOnScroll($hiddenProjects);
    }
  });
});

$hiddenProjects.forEach((element) => observer.observe(element));

const delayTransitionOnScroll = (elementX) => {
  let delay = 0;
  elementX.forEach((el) => {
    el.style.transitionDelay = `${(delay += 200)}ms`;
  });
};
