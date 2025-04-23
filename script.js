$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');
    const dots = $('.dot');
  
    function showSlide(index) {
      slides.removeClass('active').eq(index).addClass('active');
      dots.removeClass('active').eq(index).addClass('active');
    }
  
    $('.arrow.right').click(function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    dots.click(function () {
      currentIndex = $(this).index();
      showSlide(currentIndex);
    });
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  });
  