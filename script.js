const faqData = [
  {
    question: 'What is RlElectronics?',
    answer:
      'RlElectronics is a leading technology company focused on innovative electronics solutions for businesses and individuals.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Our return policy allows you to return items within 30 days for a full refund.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'You can track your order using the tracking link sent to your email after shipment.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship to most countries worldwide. Please check our shipping information page for more details.',
  },
  {
    question: 'What are your shipping options?',
    answer:
      'We offer a range of shipping options including standard, express, and overnight shipping to cater to your needs.',
  },
  {
    question: 'How can I contact customer service?',
    answer:
      'You can contact our customer service via email at support@example.com or by calling us at (123) 456-7890.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept a variety of payment methods including credit cards, PayPal, and bank transfers. You can also use RlElectronics gift cards for your purchases.',
  },
  {
    question: 'Can I cancel my order?',
    answer:
      'You can cancel your order within 24 hours of placing it. Please contact our customer support to proceed with cancellation.',
  },
  {
    question: 'How do I create an account?',
    answer:
      'To create an account, click on the "Sign Up" button on the top right of the page, fill in your details, and follow the instructions sent to your email.',
  },
  {
    question: 'Do you offer warranty on your products?',
    answer:
      'Yes, we offer a 1-year warranty on all our products. Extended warranties may also be available for certain items.',
  },
  {
    question: 'Can I change my shipping address after placing an order?',
    answer:
      'If your order hasn’t been shipped yet, you can change your shipping address by contacting our customer service team.',
  },
  {
    question: 'Do you offer discounts or promotions?',
    answer:
      'Yes, we often run promotions and offer discounts on various products. Sign up for our newsletter to stay updated on our latest offers.',
  },
  {
    question: 'How can I leave a product review?',
    answer:
      'You can leave a review by visiting the product page, scrolling to the review section, and submitting your feedback after logging into your account.',
  },
  {
    question: 'What if I receive a damaged item?',
    answer:
      'If your item arrives damaged, please contact our customer service within 7 days of receiving the product, and we will arrange for a replacement or refund.',
  },
  {
    question: 'Do you offer technical support for your products?',
    answer:
      'Yes, we offer technical support for all the products we sell. You can reach out to our support team for any help with installation or troubleshooting.',
  },
];

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

// FAQ Section
document.addEventListener('DOMContentLoaded', function () {
  // Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');

  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', function () {
      navContainer.classList.toggle('active');
    });
  }

  // FAQ Dynamic Content Generation
  const faqContainer = document.querySelector('.faq__container-top > div');

  if (faqContainer && faqData) {
    faqData.forEach((item) => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');

      faqItem.innerHTML = `
        <button class="faq-header">
          <p>${item.question}</p>
          <img src="assets/down-arrow.png" alt="arrow-down" width="16" height="16" />
        </button>
        <div class="faq-content">
          <p>${item.answer}</p>
        </div>
      `;

      faqContainer.appendChild(faqItem);
    });

    // FAQ Toggle Functionality
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        const faqItem = header.parentElement;

        // Toggle active class for smooth transition
        faqItem.classList.toggle('active-faq');

        // Hide other FAQ items
        document.querySelectorAll('.faq-item').forEach((item) => {
          if (item !== faqItem) {
            item.classList.remove('active-faq');
          }
        });
      });
    });
  }
});

function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${encodeURIComponent(
    title
  )}&brand=${encodeURIComponent(brand)}&imgSrc=${encodeURIComponent(
    imgSrc
  )}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(
    price
  )}&rating=${encodeURIComponent(rating)}`;
  location.href = url;
}
