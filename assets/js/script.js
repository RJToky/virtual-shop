const img = document.querySelectorAll(".background-img > img");

var i = 0;
setInterval(() => {
  img.forEach((image) => {
    image.classList.remove("active");
  });
  i++;
  if (i == img.length) i = 0;
  img[i].classList.add("active");
}, 5000);

const links = document.querySelectorAll(".nav-link > ul > li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    link.classList.add("active");
  });
});

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const cloneBody = document.querySelector(".clone-body");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLink.classList.toggle("active");
  cloneBody.classList.toggle("active");
  main.classList.toggle("z1");
});

cloneBody.addEventListener("click", () => {
  if (cloneBody.classList.value.includes("active")) {
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
    cloneBody.classList.remove("active");
    main.classList.remove("z1");
  }
});
