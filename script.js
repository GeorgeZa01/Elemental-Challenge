let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');
const nextArrow = document.querySelector('.arrow.right');


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i]?.classList.remove('active');
  });

  slides[index].classList.add('active');
  dots[index]?.classList.add('active');

  //caption in .hero-btn
  const caption = slides[index].getAttribute('data-caption');
  const captionElement = slides[index].querySelector('.hero-btn');
  if (captionElement) captionElement.textContent = caption;

}

// Slide to next
nextArrow?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});


// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});


showSlide(currentSlide);
