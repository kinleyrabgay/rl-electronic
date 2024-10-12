const laptops = [
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rEXYsW0BayBpRgWRyGXaD2Zd4wG1fx6eqQ&s',
    alt: 'Dell XPS 13',
    title: 'Dell XPS 13',
    description: '12th Gen Intel Core i7, 16GB RAM, 512GB SSD.',
    price: '$1,199',
    rating: '⭐️ 4.7',
    brand: 'Dell',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAp3m6Z063HkI7HRt24sHp3zfbdXNOw5jVew&s',
    alt: 'MacBook Air',
    title: 'Apple MacBook Air',
    description: 'Apple M1 chip, 8GB RAM, 256GB SSD.',
    price: '$999',
    rating: '⭐️ 4.8',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4pJgP4xjmog-DUFXVPVI78Aeuv4T-dZJ4w&s',
    alt: 'HP Spectre x360',
    title: 'HP Spectre x360',
    description: 'Intel Core i7, 16GB RAM, 1TB SSD.',
    price: '$1,399',
    rating: '⭐️ 4.6',
    brand: 'HP',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/61b4Q8ScqLL._AC_SL1500_.jpg',
    alt: 'Lenovo ThinkPad X1 Carbon',
    title: 'Lenovo ThinkPad X1 Carbon',
    description: 'Intel Core i7, 16GB RAM, 1TB SSD.',
    price: '$1,499',
    rating: '⭐️ 4.7',
    brand: 'Lenovo',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0nrTB4_Y7dVJOvWIWAp9jHQri3UxqCx2yg&s',
    alt: 'Asus ZenBook 14',
    title: 'Asus ZenBook 14',
    description: 'Intel Core i5, 16GB RAM, 512GB SSD.',
    price: '$899',
    rating: '⭐️ 4.5',
    brand: 'Asus',
  },
  {
    imgSrc: 'https://i.ebayimg.com/images/g/u~4AAOSwgMFhPU7V/s-l1200.jpg',
    alt: 'Acer Swift 3',
    title: 'Acer Swift 3',
    description: 'AMD Ryzen 7, 8GB RAM, 512GB SSD.',
    price: '$749',
    rating: '⭐️ 4.4',
    brand: 'Acer',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG66HrkN6-WEQrMQnfqzI0q5F4rhPaVw88pg&s',
    alt: 'Microsoft Surface Laptop 4',
    title: 'Microsoft Surface Laptop 4',
    description: 'Intel Core i5, 8GB RAM, 512GB SSD.',
    price: '$999',
    rating: '⭐️ 4.6',
    brand: 'Microsoft',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/71VniIMpMkL.jpg',
    alt: 'Razer Blade 15',
    title: 'Razer Blade 15',
    description: 'Intel Core i7, 16GB RAM, 1TB SSD.',
    price: '$1,799',
    rating: '⭐️ 4.8',
    brand: 'Razer',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZ8R8gjsismCGBVhWGmvNFFt72ZGXv7NPKA&s',
    alt: 'Samsung Galaxy Book Pro',
    title: 'Samsung Galaxy Book Pro',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD.',
    price: '$1,099',
    rating: '⭐️ 4.7',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Do7m6pcc0j_hJqrEpuoV8x2G22cKp8NpVQ&s',
    alt: 'LG Gram 14',
    title: 'LG Gram 14',
    description: 'Intel Core i7, 16GB RAM, 1TB SSD.',
    price: '$1,299',
    rating: '⭐️ 4.5',
    brand: 'LG',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRHFgYFDFIFaEnIyXdQsYFfEgKxNzwd5Lgw&s',
    alt: 'MSI GS66 Stealth',
    title: 'MSI GS66 Stealth',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD.',
    price: '$1,699',
    rating: '⭐️ 4.6',
    brand: 'MSI',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu1Q3nSl83RQC9fowFsmBu4CndeVkQuhq5A&s',
    alt: 'Gigabyte AORUS 15G',
    title: 'Gigabyte AORUS 15G',
    description: 'Intel Core i7, 16GB RAM, 1TB SSD.',
    price: '$1,899',
    rating: '⭐️ 4.8',
    brand: 'Gigabyte',
  },
  {
    imgSrc:
      'https://images-cdn.ubuy.co.in/634f3d2f2cf747142d7fc9f4-2021-asus-rog-zephyrus-g14-ga401ih.jpg',
    alt: 'Asus ROG Zephyrus G14',
    title: 'Asus ROG Zephyrus G14',
    description: 'AMD Ryzen 9, 16GB RAM, 1TB SSD.',
    price: '$1,499',
    rating: '⭐️ 4.9',
    brand: 'Asus',
  },
  {
    imgSrc:
      'https://www.omen.com/content/dam/sites/omen/worldwide/laptops/omen-15-laptop/t-900_gamora-frontleft.png',
    alt: 'Omen by HP 15',
    title: 'Omen by HP 15',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD.',
    price: '$1,299',
    rating: '⭐️ 4.5',
    brand: 'HP',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71DvG2FjM+L._AC_UF1000,1000_QL80_.jpg',
    alt: 'CyberPowerPC Gamer Xtreme VR',
    title: 'CyberPowerPC Gamer Xtreme VR',
    description: 'Intel Core i5, 8GB RAM, 500GB HDD.',
    price: '$699',
    rating: '⭐️ 4.4',
    brand: 'CyberPowerPC',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMirX52HJhqJb3KLqns9LKZx0gaUdIiS0og&s',
    alt: 'Acer Predator Helios 300',
    title: 'Acer Predator Helios 300',
    description: 'Intel Core i7, 16GB RAM, 512GB SSD.',
    price: '$1,199',
    rating: '⭐️ 4.6',
    brand: 'Acer',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71uI3QPKVFL._AC_UF894,1000_QL80_.jpg',
    alt: 'Dell G5 Gaming Laptop',
    title: 'Dell G5 Gaming Laptop',
    description: 'Intel Core i5, 8GB RAM, 256GB SSD.',
    price: '$899',
    rating: '⭐️ 4.5',
    brand: 'Dell',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl4HVDU0uyDGpaP2lRfvyhfqOUgmWdAowgg&s',
    alt: 'Lenovo IdeaPad 3',
    title: 'Lenovo IdeaPad 3',
    description: 'AMD Ryzen 5, 8GB RAM, 512GB SSD.',
    price: '$649',
    rating: '⭐️ 4.4',
    brand: 'Lenovo',
  },
];

function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${title}&brand=${brand}&imgSrc=${imgSrc}&description=${description}&price=${price}&rating=${rating}`;
  location.href = url;
}

function renderLaptops() {
  const container = document.querySelector('.container__products__items');
  container.innerHTML = '';

  laptops.forEach((laptop) => {
    const laptopItem = `
      <div
        role="button"
        onclick="redirectToDetails('${encodeURIComponent(
          laptop.title
        )}', '${encodeURIComponent(laptop.brand)}', '${encodeURIComponent(
      laptop.imgSrc
    )}', '${encodeURIComponent(laptop.description)}', '${encodeURIComponent(
      laptop.price
    )}', '${encodeURIComponent(laptop.rating)}')" 
        class="container__products__item"
      >
        <img
          src="${laptop.imgSrc}"
          alt="${laptop.alt}"
          class="products__icon"
        />
        <p class="products__title">${laptop.title}</p>
        <p class="products__description">${laptop.description}</p>
        <div class="products__price">
          <p>${laptop.price}</p>
          <a>${laptop.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += laptopItem;
  });
}

document.addEventListener('DOMContentLoaded', renderLaptops);
