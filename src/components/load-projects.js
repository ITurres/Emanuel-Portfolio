import { projects } from "./projects.js";

const $projectsGrid = document.querySelector("#projects-grid");

const projectsTileTemplate = (href, srcset, src, alt, title) => {
  return `<a
    class="project project-tile project--hidden"
    target="_blank"
    href="${href}"
  >
    <picture>
      <source srcset="${srcset}" type="image/webp">
      <img
      loading="lazy" 
      class="project__img" 
      src="${src}"
      alt="${alt}"
      height="100%"
      width="100%"    
      /></picture>        
    <p class="project__title">
      <span class="code"><</span>
      ${title}
      <span class="code">/></span>
    </p>
  </a>`;
};

projects.map(
  (project) =>
    ($projectsGrid.innerHTML += projectsTileTemplate(
      project.href,
      project.srcset,
      project.src,
      project.alt,
      project.title
    ))
);
