const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const links = document.querySelectorAll("nav a");
const gradients = [
  "linear-gradient(to right top, #f46b45, #eea849)",
  "linear-gradient(to right top, #005c97, #363795)",
  "linear-gradient(to right top, #e53935, #e35d5b)",
];

const options = {
  threshold: 0.5,
};

function navCheck(entries) {
  entries.forEach((entry) => {
    //   console.log(entry);
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[nav-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };

    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
      activeAnchor.style.color = "white";
    } else {
      links.forEach((islink) => {
        islink.style.color = "black";
      });
    }
  });
}

let observer = new IntersectionObserver(navCheck, options);

sections.forEach((section) => {
  observer.observe(section);
});
