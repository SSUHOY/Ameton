const carousel = document.querySelector(".question__items-box");
const carouselItems = document.querySelectorAll(".question-item");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

let currentIndex = 0;
let itemWidth = carouselItems[0].clientWidth + 20;

carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

nextBtn.addEventListener("click", () => {
  if (currentIndex >= carouselItems.length - 3) return;
  currentIndex++;
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
  let nextBtnOpacity = (nextBtn.style.display = `none`);
  console.log(nextBtnOpacity);
  if (nextBtnOpacity === "none") {
    prevBtn.style.display = "block";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
  let prefBtnOpacity = (prevBtn.style.display = `none`);
  if (prefBtnOpacity === "none") {
    nextBtn.style.display = "block";
  }
});

function adjustElementStyle() {
  const screenWidth = window.innerWidth;
  const element = document.querySelector(".question__items-box");
  if (screenWidth >= 375 && screenWidth < 768) {
    element.style.transform = "translateX(0px)";
  }
}

window.addEventListener("resize", adjustElementStyle);
