const mobilePhones = [
  {
    imgSrc: 'https://m.media-amazon.com/images/I/51UtM-A3fdL.jpg',
    alt: 'iPhone 13 Pro',
    title: 'iPhone 13 Pro',
    description: 'Pro camera system with A15 Bionic chip.',
    price: '$999',
    rating: '⭐️ 4.8',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToBP-cBUA-Fu-sDR3J0PTZgsQvznegYcAog&s',
    alt: 'OnePlus 9 Pro',
    title: 'OnePlus 9 Pro',
    description: 'Fluid AMOLED display with fast charging.',
    price: '$969',
    rating: '⭐️ 4.5',
    brand: 'OnePlus',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/714QXVOLs7L._AC_UF1000,1000_QL80_.jpg',
    alt: 'Samsung Galaxy S21',
    title: 'Samsung Galaxy S21',
    description: 'Flagship phone with Dynamic AMOLED 2X display.',
    price: '$799',
    rating: '⭐️ 4.8',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoIlxwq-PyfjOERhymHqzhTXAb8nVx3XMkw&s',
    alt: 'Google Pixel 6',
    title: 'Google Pixel 6',
    description: "Google's own Tensor chip with brilliant camera features.",
    price: '$599',
    rating: '⭐️ 4.6',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXswlpTP29GW2k8ouPcWGPJeLN65l1SLRBA&s',
    alt: 'Oppo Find X3 Pro',
    title: 'Oppo Find X3 Pro',
    description: 'Top-notch performance with 10-bit color display.',
    price: '$1,099',
    rating: '⭐️ 4.8',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnnKa6-NY5TOjZ-i79pyOnIL0abN33HBdEg&s',
    alt: 'iPhone 12',
    title: 'iPhone 12',
    description: 'Dual-camera system with Night mode.',
    price: '$799',
    rating: '⭐️ 4.7',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9ils7yd-HAHdOtEnaJmZIjxewqm8FY1Uug&s',
    alt: 'Samsung Galaxy Note 20',
    title: 'Samsung Galaxy Note 20',
    description: 'S Pen and powerful performance for productivity.',
    price: '$999',
    rating: '⭐️ 4.6',
    brand: 'Samsung',
  },
  {
    imgSrc: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg',
    alt: 'Google Pixel 5',
    title: 'Google Pixel 5',
    description: 'Compact phone with great camera.',
    price: '$499',
    rating: '⭐️ 4.5',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://www.clove-technology.com/cdn/shop/products/bf212bed-d35f-436e-b998-7bbd6862b367_1200x.jpg?v=1623769706',
    alt: 'Oppo A94',
    title: 'Oppo A94',
    description: 'Affordable phone with decent specs.',
    price: '$299',
    rating: '⭐️ 4.3',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-purple.jpg',
    alt: 'iPhone 11',
    title: 'iPhone 11',
    description: 'A13 Bionic chip with Ultra Wide camera.',
    price: '$599',
    rating: '⭐️ 4.7',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71D6PFi7QFL._AC_UF894,1000_QL80_.jpg',
    alt: 'OnePlus Nord 2',
    title: 'OnePlus Nord 2',
    description: 'Affordable flagship with MediaTek Dimensity 1200 AI.',
    price: '$499',
    rating: '⭐️ 4.5',
    brand: 'OnePlus',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/8178oULhGJL.jpg',
    alt: 'Samsung Galaxy A52',
    title: 'Samsung Galaxy A52',
    description: 'Affordable phone with 90Hz AMOLED display.',
    price: '$499',
    rating: '⭐️ 4.4',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq8e5ac1a4Cz8BKOCbPhaHHXlKSy_KZI90A&s',
    alt: 'Google Pixel 4a',
    title: 'Google Pixel 4a',
    description: 'Compact and affordable with excellent camera.',
    price: '$349',
    rating: '⭐️ 4.5',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYCPbKpxs3nVnfYYITiHdKoaJm4E4gJJTNQ&s',
    alt: 'Oppo F11 Pro',
    title: 'Oppo F11 Pro',
    description: 'Pop-up selfie camera and large display.',
    price: '$399',
    rating: '⭐️ 4.5',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJxBs2dIrEQFfX4Yn0AtFIhe48COmzu_ZnA&s',
    alt: 'iPhone SE (2020)',
    title: 'iPhone SE (2020)',
    description: 'Small and powerful with A13 Bionic chip.',
    price: '$399',
    rating: '⭐️ 4.4',
    brand: 'Apple',
  },
  {
    imgSrc: 'https://i.ebayimg.com/images/g/KjcAAOSwewJfiG~G/s-l1200.jpg',
    alt: 'OnePlus 8T',
    title: 'OnePlus 8T',
    description: '120Hz Fluid AMOLED display with fast charging.',
    price: '$749',
    rating: '⭐️ 4.6',
    brand: 'OnePlus',
  },
  {
    imgSrc: 'https://m.media-amazon.com/images/I/41rnXHjfjiL._AC_.jpg',
    alt: 'Samsung Galaxy S21 Ultra',
    title: 'Samsung Galaxy S21 Ultra',
    description: 'Flagship with 108MP camera and 100x zoom.',
    price: '$1,199',
    rating: '⭐️ 4.9',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_rPMqi2FWNb7PnYfaaffmxyzo-jHQpuzvA&s',
    alt: 'Google Pixel 6 Pro',
    title: 'Google Pixel 6 Pro',
    description: 'Google’s best camera phone with Tensor chip.',
    price: '$899',
    rating: '⭐️ 4.8',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/S/aplus-media/sota/fb93f55b-dbda-4656-81f4-35b5288b12cd.__CR72,0,688,688_PT0_SX300_V1___.jpg',
    alt: 'Oppo Reno6 5G',
    title: 'Oppo Reno6 5G',
    description: 'Smooth performance and great design.',
    price: '$549',
    rating: '⭐️ 4.6',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://cdn11.bigcommerce.com/s-4zvaryrxi2/images/stencil/1280x1280/products/18928/58487/APPLE-iPHONE-XR-128-BLACK-RBA-2__66688.1612884665.jpg?c=1',
    alt: 'iPhone XR',
    title: 'iPhone XR',
    description: 'Liquid Retina display and Face ID.',
    price: '$499',
    rating: '⭐️ 4.5',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/o/n/oneplus-nord-ce-3-lite-5g-dual-sim-pastel-lime-128gb-and-8gb-ram.jpg',
    alt: 'OnePlus Nord CE 5G',
    title: 'OnePlus Nord CE 5G',
    description: 'Affordable 5G phone with Snapdragon 750G.',
    price: '$329',
    rating: '⭐️ 4.3',
    brand: 'OnePlus',
  },
  {
    imgSrc:
      'https://flexmobile.ca/cdn/shop/products/zflip3_530x@2x.jpg?v=1636157727',
    alt: 'Samsung Galaxy Z Flip',
    title: 'Samsung Galaxy Z Flip',
    description: 'Foldable phone with a unique design.',
    price: '$999',
    rating: '⭐️ 4.6',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HO_qzHqTgs_nLDBCd6EXkLzxGpjNWwDoQg&s',
    alt: 'Google Pixel 3a',
    title: 'Google Pixel 3a',
    description: 'Affordable with an excellent camera.',
    price: '$399',
    rating: '⭐️ 4.4',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqRM1jRidg8t_W0G3bnfJ5ZNh9EhUjhVB0A&s',
    alt: 'Oppo A54',
    title: 'Oppo A54',
    description: 'Budget phone with large battery.',
    price: '$199',
    rating: '⭐️ 4.2',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg',
    alt: 'iPhone 13',
    title: 'iPhone 13',
    description: 'A15 Bionic chip and 5G speed.',
    price: '$799',
    rating: '⭐️ 4.8',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://images.fonearena.com/blog/wp-content/uploads/2019/09/OnePlus-7T-1.jpg',
    alt: 'OnePlus 7T',
    title: 'OnePlus 7T',
    description: '90Hz display and Snapdragon 855 Plus.',
    price: '$649',
    rating: '⭐️ 4.4',
    brand: 'OnePlus',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxaFpzIsgZw3keB9iborwxt5NFHRmtuiXGg&s',
    alt: 'Samsung Galaxy A32 5G',
    title: 'Samsung Galaxy A32 5G',
    description: 'Affordable 5G with great battery life.',
    price: '$279',
    rating: '⭐️ 4.3',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qzf_47OFaKcBTVpSabYRpqj1Xr84aYT9wA&s',
    alt: 'Google Pixel 4 XL',
    title: 'Google Pixel 4 XL',
    description: 'Excellent camera with 90Hz display.',
    price: '$899',
    rating: '⭐️ 4.6',
    brand: 'Google',
  },
  {
    imgSrc: 'https://i.ebayimg.com/images/g/~L0AAOSwx6FgEycm/s-l1200.jpg',
    alt: 'Oppo A72',
    title: 'Oppo A72',
    description: 'Affordable phone with great battery.',
    price: '$349',
    rating: '⭐️ 4.5',
    brand: 'Oppo',
  },
  {
    imgSrc:
      'https://www.pageplusphonestore.com/wp-content/uploads/2021/12/Apple_iPhone_12_Mini_Black_New_600x600.png',
    alt: 'iPhone 12 Mini',
    title: 'iPhone 12 Mini',
    description: 'Small but powerful with A14 Bionic chip.',
    price: '$699',
    rating: '⭐️ 4.7',
    brand: 'Apple',
  },
  {
    imgSrc:
      'https://m-cdn.phonearena.com/images/phones/81033-940/OnePlus-Nord-N100.jpg?w=1',
    alt: 'OnePlus Nord N100',
    title: 'OnePlus Nord N100',
    description: 'Budget phone with large battery.',
    price: '$179',
    rating: '⭐️ 4.1',
    brand: 'OnePlus',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBDa_-ocL0otukBo9eCpSJ4YbbGxq_qQjhg&s',
    alt: 'Samsung Galaxy Z Fold 3',
    title: 'Samsung Galaxy Z Fold 3',
    description: 'Innovative foldable design with high performance.',
    price: '$1,799',
    rating: '⭐️ 4.8',
    brand: 'Samsung',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaywVclhxySbbL7xPwZS8rDjK9zd-sV3usNw&s',
    alt: 'Google Pixel 3 XL',
    title: 'Google Pixel 3 XL',
    description: 'Great camera and large display.',
    price: '$599',
    rating: '⭐️ 4.5',
    brand: 'Google',
  },
  {
    imgSrc:
      'https://m.media-amazon.com/images/I/71p18XI0oFL._AC_UF1000,1000_QL80_.jpg',
    alt: 'Oppo Reno5',
    title: 'Oppo Reno5',
    description: 'Mid-range phone with great design.',
    price: '$449',
    rating: '⭐️ 4.4',
    brand: 'Oppo',
  },
];

// Function to redirect with phone details
function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${title}&brand=${brand}&imgSrc=${imgSrc}&description=${description}&price=${price}&rating=${rating}`;
  location.href = url;
}

function renderMobilePhones(selectedBrand) {
  const container = document.querySelector('.container__products__items');
  container.innerHTML = '';

  const filteredPhones = selectedBrand
    ? mobilePhones.filter((phone) => phone.brand === selectedBrand)
    : mobilePhones;

  filteredPhones.forEach((phone) => {
    const phoneItem = `
      <div role="button" onclick="redirectToDetails('${encodeURIComponent(
        phone.title
      )}', '${encodeURIComponent(phone.brand)}', '${encodeURIComponent(
      phone.imgSrc
    )}', '${encodeURIComponent(phone.description)}', '${encodeURIComponent(
      phone.price
    )}', '${encodeURIComponent(
      phone.rating
    )}')" class="container__products__item">
        <img src="${phone.imgSrc}" alt="${phone.alt}" class="products__icon">
        <p class="products__title">${phone.title}</p>
        <p class="products__description">${phone.description}</p>
        <div class="products__price">
          <p>${phone.price}</p>
          <a>${phone.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += phoneItem;
  });
}

// Event listener for brand category clicks
document.addEventListener('DOMContentLoaded', function () {
  // Render all mobile phones initially
  renderMobilePhones();

  const brandItems = document.querySelectorAll('.brand-category__item');

  brandItems.forEach((item) => {
    // Trigger logic only on click of the item
    item.addEventListener('click', function () {
      // Get the brand from the clicked item's data attribute
      const selectedBrand = this.getAttribute('data-brand');

      // Remove 'active' class from all items
      brandItems.forEach((i) => i.classList.remove('activeBrand'));

      // Add 'active' class to the clicked item
      this.classList.add('activeBrand');

      // Render phones for the selected brand
      renderMobilePhones(selectedBrand);
    });
  });
});
