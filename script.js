    const toggleBtn = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        toggleBtn.addEventListener('click', () => {
            const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
            toggleBtn.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('active');
        });

  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
      });
    }

    prevBtn.addEventListener('click', () => {
        console.log('ckilklkk');
        
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
        console.log('ckilklkk');
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    });

    // Optional: Auto-slide every 5 seconds
    // setInterval(() => {
    //   nextBtn.click();
    // }, 5000);
  });
