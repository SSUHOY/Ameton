const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".question-item");
console.log(carouselItems);
// const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let itemWidth = carouselItems[0].clientWidth + 20;
console.log(itemWidth);

carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;

nextBtn.addEventListener("click", () => {
  if (currentIndex >= carouselItems.length - 3) return;
  currentIndex++;
  carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
});
