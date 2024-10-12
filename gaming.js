const gamingProducts = [
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZDAUmb7yYzFuVAeWahtg1_ekIHopoOwAxA&s',
    alt: 'Sony PlayStation 5',
    title: 'Sony PlayStation 5',
    description: 'Next-gen console, 4K gaming, 825GB SSD.',
    price: '$499',
    rating: '⭐️ 4.9',
    brand: 'Sony',
  },
  {
    imgSrc:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/82bc268b-9a19-490f-b270-7908a6ba196b.jpg;maxHeight=640;maxWidth=550;format=webp',
    alt: 'Microsoft Xbox Series X',
    title: 'Microsoft Xbox Series X',
    description: 'Next-gen console, 4K gaming, 1TB SSD.',
    price: '$499',
    rating: '⭐️ 4.8',
    brand: 'Microsoft',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71UiJ0O6vTL._AC_UF350,350_QL80_.jpg',
    alt: 'Nintendo Switch',
    title: 'Nintendo Switch',
    description: 'Hybrid console, 6.2-inch display, 32GB storage.',
    price: '$299',
    rating: '⭐️ 4.7',
    brand: 'Nintendo',
  },
  {
    imgSrc:
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/alienware/desktop/dell-gen-desktops-alienware-aurora-r12-wm-800x550.png?fmt=jpg&wid=800&hei=550',
    alt: 'Alienware Aurora R12',
    title: 'Alienware Aurora R12',
    description: 'Intel i7, 16GB RAM, NVIDIA RTX 3080.',
    price: '$2,199',
    rating: '⭐️ 4.9',
    brand: 'Alienware',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_UF894,1000_QL80_.jpg',
    alt: 'Oculus Quest 2',
    title: 'Oculus Quest 2',
    description: '128GB storage, all-in-one VR headset.',
    price: '$399',
    rating: '⭐️ 4.8',
    brand: 'Oculus',
  },
  {
    imgSrc:
      'https://www.tmt.my/data/editor/sc-product/15126/logitech_g_pro_x2_wireless_main.jpg',
    alt: 'Logitech G Pro Gaming Headset',
    title: 'Logitech G Pro Gaming Headset',
    description: '7.1 surround sound, noise-cancelling mic.',
    price: '$129',
    rating: '⭐️ 4.7',
    brand: 'Logitech',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7fiTATWMp8zqW1HIegTAlLSL8BKeppsccw&s',
    alt: 'Razer DeathAdder V2',
    title: 'Razer DeathAdder V2',
    description: '20K DPI Optical sensor, ergonomic design.',
    price: '$69',
    rating: '⭐️ 4.8',
    brand: 'Razer',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaASfX_aKOREA85-ImFxeJh5hnj19eYCd04Q&s',
    alt: 'Secretlab TITAN Evo',
    title: 'Secretlab TITAN Evo',
    description: 'Premium gaming chair, full recline.',
    price: '$449',
    rating: '⭐️ 4.9',
    brand: 'Secretlab',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71dwsA3KsfL._AC_UF894,1000_QL80_.jpg',
    alt: 'Asus ROG Strix G15',
    title: 'Asus ROG Strix G15',
    description: 'Intel i7, 16GB RAM, NVIDIA RTX 3060.',
    price: '$1,499',
    rating: '⭐️ 4.7',
    brand: 'Asus',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSllr7Hlt5RtaiaygPKh64mXCrwx-OV7IBCA&s',
    alt: 'Corsair K95 RGB Platinum',
    title: 'Corsair K95 RGB Platinum',
    description: 'Mechanical gaming keyboard, RGB lighting.',
    price: '$199',
    rating: '⭐️ 4.8',
    brand: 'Corsair',
  },
];

function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${title}&brand=${brand}&imgSrc=${imgSrc}&description=${description}&price=${price}&rating=${rating}`;
  location.href = url;
}

// Apple
function renderGaming() {
  const container = document.querySelector('.container__products__items');
  container.innerHTML = '';

  gamingProducts.forEach((gaming) => {
    const gamingItems = `
      <div
        role="button"
        onclick="redirectToDetails('${encodeURIComponent(
          gaming.title
        )}', '${encodeURIComponent(gaming.brand)}', '${encodeURIComponent(
      gaming.imgSrc
    )}', '${encodeURIComponent(gaming.description)}', '${encodeURIComponent(
      gaming.price
    )}', '${encodeURIComponent(gaming.rating)}')"
        class="container__products__item"
      >
        <img
          src="${gaming.imgSrc}"
          alt="${gaming.alt}"
          class="products__icon"
        />
        <p class="products__title">${gaming.title}</p>
        <p class="products__description">${gaming.description}</p>
        <div class="products__price">
          <p>${gaming.price}</p>
          <a>${gaming.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += gamingItems;
  });
}

document.addEventListener('DOMContentLoaded', renderGaming);
