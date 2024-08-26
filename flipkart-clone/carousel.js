export const carouselFn = () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");
  console.log(slides);
  const totalSlides = slides.length;

  function showSlide(index) {
    const carouselInner = document.querySelector(".inner-carousel");
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  const buttons = document.querySelector(".carousel-controls");

  buttons.addEventListener("click", function (e) {
    if (e.target.className == "prev") prevSlide();
    if (e.target.className == "next") nextSlide();
  });

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);
};
