const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const kick = document.querySelector(".kick img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);

  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate IN
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `none`;
  // poput
  title.style.transform = `translateZ(150px)`;
  kick.style.transform = `translateZ(200px) rotateZ(+135deg)`;
  purchase.style.transform = `translateZ(75px)`;
  sizes.style.transform = `translateZ(150px)`;
  description.style.transform = `translateZ(150px)`;
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;

  // popback
  title.style.transform = `translateZ(0px)`;
  kick.style.transform = `translateZ(0px) rotateZ(0deg)`;
  purchase.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  description.style.transform = `translateZ(0px)`;
});
