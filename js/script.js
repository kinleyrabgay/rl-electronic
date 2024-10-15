// Carousel
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = 'translateX(-' + currentSlide * 100 + '%)';
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Redirect to detail page
function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `detail.html?title=${encodeURIComponent(
    title
  )}&brand=${encodeURIComponent(brand)}&imgSrc=${encodeURIComponent(
    imgSrc
  )}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(
    price
  )}&rating=${encodeURIComponent(rating)}`;
  location.href = url;
}

// Toggle menu
function toggleMenu() {
  const navContainer = document.querySelector('.nav-container');

  if (navContainer.classList.contains('active')) {
    navContainer.classList.remove('active'); // Remove if already active
  } else {
    navContainer.classList.add('active'); // Add if not present
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Ensure on page load the class 'active' is not present
  const navContainer = document.querySelector('.nav-container');
  navContainer.classList.remove('active');
});
