/* Author: 

	*/
const background = document.querySelector(".wrapper");
console.log(background);
const slides = document.querySelectorAll(".slide");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const activeClass = document.querySelector(".active img");
const bgImageSrc = document.querySelector(".slider-background");

slides.innerText = "";
let imageIndex = 0;

rightBtn.addEventListener("click", () => {
  imageIndex++;

  if (imageIndex > slides.length - 1) {
    imageIndex = 0;
  }

  // setBackground();
  addActiveClass();
});

leftBtn.addEventListener("click", () => {
  imageIndex--;

  if (imageIndex < 0) {
    imageIndex = slides.length - 1;
  }

  // setBackground();
  addActiveClass();
});

// console.log(setBackground);
function addActiveClass() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[imageIndex].classList.add("active");
}

// setBackground();

// function setBackground() {
//   background.style.backgroundImage = slides[imageIndex].style.backgroundImage;

//   //   const target = activeClass.getAttribute("src");
//   //   console.log(target);
//   //   const source = `
//   //     <figure>
//   //         <img src="${target}" alt="background Image">
//   //     </figure>
//   //     `;
//   //   bgImageSrc.innerHTML = source;
//   //   console.log(bgImageSrc.innerHTML);
// }
