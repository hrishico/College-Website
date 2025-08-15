document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.events-slider');
  if (!slider) return;

  const dots = document.querySelectorAll('.dot');
  const cards = document.querySelectorAll('.event-card');
  let currentIndex = 0;
  let autoScrollInterval;
  const scrollDelay = 2000; // 3 seconds between slides
  let isScrolling = false;

  // Function to update active dot and scroll position
  function goToSlide(index) {
    if (isScrolling) return;
    isScrolling = true;
    
    currentIndex = index;
    const cardWidth = cards[0].offsetWidth + 24; // width + gap
    slider.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    
    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // Reset to first slide if at end
    if (currentIndex >= cards.length - 1) {
      setTimeout(() => {
        goToSlide(0); // Return to first slide
      }, scrollDelay);
    }

    setTimeout(() => {
      isScrolling = false;
    }, 500); // Match this with your CSS transition duration
  }

  // Auto-scroll functionality
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isScrolling && currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    }, scrollDelay);
  }

  // Pause auto-scroll on hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
  });

  // Resume auto-scroll when mouse leaves
  slider.addEventListener('mouseleave', startAutoScroll);

  // Update dots on manual scroll
  slider.addEventListener('scroll', function() {
    if (isScrolling) return;
    
    const scrollPosition = slider.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 24;
    const newIndex = Math.round(scrollPosition / cardWidth);
    
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  });

  // Click on dots to scroll
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      clearInterval(autoScrollInterval);
      goToSlide(index);
      startAutoScroll();
    });
  });

  // Initialize
  goToSlide(0);
  startAutoScroll();
});