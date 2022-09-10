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
