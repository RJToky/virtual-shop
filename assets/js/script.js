const img = document.querySelectorAll(".background-img > img");

var i = 0;
setInterval(() => {
  img.forEach((image) => {
    image.classList.remove("active");
  });
  i++;
  if (i == img.length) i = 0;
  img[i].classList.add("active");
}, 6000);
