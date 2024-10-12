const cameraProducts = [
  {
    imgSrc:
      'https://i1.adis.ws/i/canon/eos-r5_martin_bissig_lifestyle_05_c629aad3c2154f34b3d7d7ba5a509196?$70-30-header-4by3-dt-jpg$',
    alt: 'Canon EOS R5',
    title: 'Canon EOS R5',
    description: '45 MP, Full-frame, 8K video recording.',
    price: '$3,899',
    rating: '⭐️ 4.9',
    brand: 'Canon',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7oDjhA68jGhqJw1DnIJ9Aa7xmiNhIlv1M8A&s',
    alt: 'Sony Alpha a7 III',
    title: 'Sony Alpha a7 III',
    description: '24 MP, Full-frame, 4K video recording.',
    price: '$1,999',
    rating: '⭐️ 4.8',
    brand: 'Sony',
  },
  {
    imgSrc:
      'https://photo-op.ph/wp-content/uploads/2021/01/1659-Z6II-other1.png',
    alt: 'Nikon Z6 II',
    title: 'Nikon Z6 II',
    description: '24 MP, Full-frame, 4K UHD video recording.',
    price: '$1,799',
    rating: '⭐️ 4.7',
    brand: 'Nikon',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUF1oAMLNPsYDTxeTUl0wRCA2CpcHp4ypig&s',
    alt: 'Fujifilm X-T4',
    title: 'Fujifilm X-T4',
    description: '26 MP, APS-C, 4K video recording.',
    price: '$1,699',
    rating: '⭐️ 4.6',
    brand: 'Fujifilm',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEBTWp_TgMZ_qQkz2kKAufxs3kzTl59gOzg&s',
    alt: 'Olympus OM-D E-M1 Mark III',
    title: 'Olympus OM-D E-M1 Mark III',
    description: '20 MP, Micro Four Thirds, 4K video.',
    price: '$1,499',
    rating: '⭐️ 4.5',
    brand: 'Olympus',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfIoFMirr7a5hr3hB_08eh1tBZXuixhLUlA&s',
    alt: 'Panasonic Lumix GH5',
    title: 'Panasonic Lumix GH5',
    description: '20 MP, Micro Four Thirds, 4K video.',
    price: '$1,299',
    rating: '⭐️ 4.6',
    brand: 'Panasonic',
  },
  {
    imgSrc:
      'https://leica-camera.com/sites/default/files/styles/medium_desktop/public/2021-09/Leica-Q2-_-top-Sensor-_-1512x1008-BG-f4f4f4_teaser-1316x878.jpeg?itok=CIEaW--k',
    alt: 'Leica Q2',
    title: 'Leica Q2',
    description: '47 MP, Full-frame, 4K video.',
    price: '$4,995',
    rating: '⭐️ 4.9',
    brand: 'Leica',
  },
  {
    imgSrc:
      'https://i1.adis.ws/i/canon/4_canon_eos_90d_back-8eba7528-af5f-11e9-a6ad-e4a471390afe_09381db3e3cb4e70a542e20f53a6e46c?$prod-gallery-1by1-jpg$',
    alt: 'Canon EOS 90D',
    title: 'Canon EOS 90D',
    description: '32 MP, APS-C, 4K UHD video recording.',
    price: '$1,199',
    rating: '⭐️ 4.7',
    brand: 'Canon',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOUhlx_3NReGbuQPGdgIUioue4iWBNTy7zg&s',
    alt: 'Sony RX100 VII',
    title: 'Sony RX100 VII',
    description: '20 MP, 1-inch sensor, 4K video.',
    price: '$1,298',
    rating: '⭐️ 4.8',
    brand: 'Sony',
  },
  {
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV05XQhxttkxCGa-R9Oz6m88VYxjQwozHFZA&s',
    alt: 'Nikon D780',
    title: 'Nikon D780',
    description: '24 MP, Full-frame, 4K UHD video.',
    price: '$2,299',
    rating: '⭐️ 4.7',
    brand: 'Nikon',
  },
];

function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${title}&brand=${brand}&imgSrc=${imgSrc}&description=${description}&price=${price}&rating=${rating}`;
  location.href = url;
}

// Apple
function renderCamera() {
  const container = document.querySelector('.container__products__items');
  container.innerHTML = '';

  cameraProducts.forEach((camera) => {
    const cameraItems = `
      <div
        role="button"
        onclick="redirectToDetails('${encodeURIComponent(
          camera.title
        )}', '${encodeURIComponent(camera.brand)}', '${encodeURIComponent(
      camera.imgSrc
    )}', '${encodeURIComponent(camera.description)}', '${encodeURIComponent(
      camera.price
    )}', '${encodeURIComponent(camera.rating)}')"
        class="container__products__item"
      >
        <img
          src="${camera.imgSrc}"
          alt="${camera.alt}"
          class="products__icon"
        />
        <p class="products__title">${camera.title}</p>
        <p class="products__description">${camera.description}</p>
        <div class="products__price">
          <p>${camera.price}</p>
          <a>${camera.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += cameraItems;
  });
}

document.addEventListener('DOMContentLoaded', renderCamera);
