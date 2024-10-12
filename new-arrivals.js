const products = {
  appleProducts: [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWatxfWIyHYzqLF-Sm3AjdKVNmfhleHHc6dw&s',
      alt: 'Apple MacBook Pro 14',
      title: 'Apple MacBook Pro 14',
      description: 'M1 Pro chip, 16GB RAM, 512GB SSD.',
      price: '$1,999',
      rating: '⭐️ 4.9',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://cdn-iibnp.nitrocdn.com/VjyilAmBtWmZaLojjwWFayaMdinRRPlg/assets/images/optimized/rev-f0d6867/www.ourfriday.co.uk/image/cache/catalog/Apple/ipad-pro-13-inch-m4-silver-2-800x800h.png',
      alt: 'Apple iPad Pro',
      title: 'Apple iPad Pro 11',
      description: 'M1 chip, 8GB RAM, 128GB SSD.',
      price: '$799',
      rating: '⭐️ 4.8',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg',
      alt: 'Apple Watch Series 7',
      title: 'Apple Watch Series 7',
      description: 'Always-On Retina display, fitness tracking.',
      price: '$399',
      rating: '⭐️ 4.7',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8osSMK3HI7bre7MelAqLVEWyhoxno_yqvQ&s',
      alt: 'Apple AirPods Pro',
      title: 'Apple AirPods Pro',
      description: 'Active noise cancellation, transparency mode.',
      price: '$249',
      rating: '⭐️ 4.9',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyy9jZU0VLmIubWUljgydMyiLrP5jLd7wCtw&s',
      alt: 'Apple iMac 24',
      title: 'Apple iMac 24',
      description: 'Apple M1 chip, 8GB RAM, 256GB SSD.',
      price: '$1,299',
      rating: '⭐️ 4.8',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg1G58RSoVlX7ZLcKKXOBZVoiDDbnOfqmWQ&s',
      alt: 'Apple AirTag',
      title: 'Apple AirTag',
      description: 'Precision finding, ultra-wideband technology.',
      price: '$29',
      rating: '⭐️ 4.7',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341',
      alt: 'Apple Mac Mini',
      title: 'Apple Mac Mini',
      description: 'Apple M1 chip, 8GB RAM, 256GB SSD.',
      price: '$699',
      rating: '⭐️ 4.6',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://www.apple.com/v/homepod-mini/j/images/overview/hero_homepod_yellow__7wty1lruowyi_large.png',
      alt: 'Apple HomePod mini',
      title: 'Apple HomePod mini',
      description: 'Smart speaker with Siri, 360-degree audio.',
      price: '$99',
      rating: '⭐️ 4.8',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010471000',
      alt: 'Apple Magic Keyboard',
      title: 'Apple Magic Keyboard',
      description: 'Wireless keyboard with a sleek design.',
      price: '$99',
      rating: '⭐️ 4.6',
      brand: 'Apple',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fUzHIJEBsxeQu_fiZS3tUn1M1sHXkSZvag&s',
      alt: 'Apple iPhone 14',
      title: 'Apple iPhone 14',
      description: 'Super Retina XDR display, A15 Bionic chip.',
      price: '$799',
      rating: '⭐️ 4.8',
      brand: 'Apple',
    },
  ],
  samsungProducts: [
    {
      imgSrc:
        'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-s21-5g-phantom-grey-128gb-and-8gb-ram-sm-g991b_1.jpg',
      alt: 'Samsung Galaxy S21',
      title: 'Samsung Galaxy S21',
      description: '108MP triple camera, 5G capable.',
      price: '$799',
      rating: '⭐️ 4.7',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLbmdhkl2jwQehjeP_ZKeet_d56Earlr_Bw&s',
      alt: 'Samsung Galaxy Tab S7',
      title: 'Samsung Galaxy Tab S7',
      description: '11-inch display, Snapdragon 865+.',
      price: '$649',
      rating: '⭐️ 4.8',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsCx8bCIRgEokemIwoPoQ0rz6KC6YQm0PGg&s',
      alt: 'Samsung QLED TV',
      title: 'Samsung 65-Inch QLED TV',
      description: '4K Ultra HD, Quantum HDR.',
      price: '$1,199',
      rating: '⭐️ 4.9',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdOVp9XaZM8FZ7zUqmmTUIjTXQxUgheUgLg&s',
      alt: 'Samsung Galaxy Buds Pro',
      title: 'Samsung Galaxy Buds Pro',
      description: 'Active noise cancellation, 28 hours battery.',
      price: '$199',
      rating: '⭐️ 4.7',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UF1000,1000_QL80_.jpg',
      alt: 'Samsung Galaxy Watch 4',
      title: 'Samsung Galaxy Watch 4',
      description: 'Fitness tracking, health metrics.',
      price: '$249',
      rating: '⭐️ 4.8',
      brand: 'Samsung',
    },
    {
      imgSrc: 'https://m.media-amazon.com/images/I/8178oULhGJL.jpg',
      alt: 'Samsung Galaxy A52',
      title: 'Samsung Galaxy A52',
      description: '6.5-inch display, quad-camera setup.',
      price: '$349',
      rating: '⭐️ 4.6',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://m.media-amazon.com/images/I/71f2I8cltBL._AC_UF1000,1000_QL80_.jpg',
      alt: 'Samsung Galaxy Z Flip 3',
      title: 'Samsung Galaxy Z Flip 3',
      description: 'Foldable smartphone, 120Hz display.',
      price: '$999',
      rating: '⭐️ 4.7',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://images.samsung.com/is/image/samsung/p6pim/ae/feature/156904643/ae-feature-ergonomic-charger-510907648?$FB_TYPE_B_JPG$',
      alt: 'Samsung Jet 90',
      title: 'Samsung Jet 90 Stick Vacuum',
      description: 'Powerful suction, 5-layer filtration.',
      price: '$599',
      rating: '⭐️ 4.8',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGi-cIPcJtPVE8fK5ynFXF_Pv8H4-EG3lRQ&s',
      alt: 'Samsung 980 Pro SSD',
      title: 'Samsung 980 Pro NVMe SSD',
      description: '1TB storage, PCIe 4.0 interface.',
      price: '$149',
      rating: '⭐️ 4.9',
      brand: 'Samsung',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPsfvVx0h4ajbszp2BA8PyDvkE5yF4_N2FQ&s',
      alt: 'Samsung Frame TV',
      title: 'Samsung Frame 55-Inch TV',
      description: 'Art mode, customizable bezels.',
      price: '$1,299',
      rating: '⭐️ 4.8',
      brand: 'Samsung',
    },
  ],
  lenovoProducts: [
    {
      imgSrc: 'https://www.dateks.lv/images/pic/2400/2400/909/1337.jpg',
      alt: 'Lenovo IdeaPad 3',
      title: 'Lenovo IdeaPad 3',
      description: 'AMD Ryzen 5, 15.6" FHD display.',
      price: '$549',
      rating: '⭐️ 4.5',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgO2YaDVBoNKxxC6ayqmCnmgPTuF_xqpzKIA&s',
      alt: 'Lenovo Yoga 9i',
      title: 'Lenovo Yoga 9i',
      description: '14-inch 2-in-1, Intel i7, 16GB RAM.',
      price: '$1,299',
      rating: '⭐️ 4.8',
      brand: 'Lenovo',
    },
    {
      imgSrc: 'https://m.media-amazon.com/images/I/61b4Q8ScqLL._AC_SL1500_.jpg',
      alt: 'Lenovo ThinkPad X1 Carbon',
      title: 'Lenovo ThinkPad X1 Carbon',
      description: 'Intel i5, 14-inch, ultra-light design.',
      price: '$1,599',
      rating: '⭐️ 4.9',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8QUPzR-ZPa7qZAUQmKrrz5SRQK9PnS6CVw&s',
      alt: 'Lenovo Chromebook Flex 5',
      title: 'Lenovo Chromebook Flex 5',
      description: '13-inch touchscreen, Intel i3.',
      price: '$429',
      rating: '⭐️ 4.6',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZvYeTGcER0VI5NVDvWkQqvWajWMDBxoVlg&s',
      alt: 'Lenovo Legion 5',
      title: 'Lenovo Legion 5',
      description: 'AMD Ryzen 5, 15.6" gaming laptop.',
      price: '$1,099',
      rating: '⭐️ 4.7',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODk2MjZ8aW1hZ2UvcG5nfGgwMC9oNWMvMTE2ODgzOTg5NDYzMzQucG5nfGI2OGVmZjQzM2U3OWNjMmMxZDMzMjZjNDUxMTk2NDk2ZTliMDU1M2JiODQyMzYwNDBiZjM2ZGQ0YzcxNDlmZDY/lenovo-clock-smart-clock-gen-2-subseries-hero.png',
      alt: 'Lenovo Smart Clock 2',
      title: 'Lenovo Smart Clock 2',
      description: 'Smart display, Google Assistant.',
      price: '$89',
      rating: '⭐️ 4.5',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://p3-ofp.static.pub/fes/cms/2021/07/22/icysl39azuqnz4yrv7wc9zopwx8a45492484.png',
      alt: 'Lenovo Tab P11',
      title: 'Lenovo Tab P11',
      description: '11-inch display, 4GB RAM, 128GB storage.',
      price: '$249',
      rating: '⭐️ 4.6',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwnWVbP2zkZQDEm5I61tWFrI5iesMqTsLiQ&s',
      alt: 'Lenovo ThinkBook 14',
      title: 'Lenovo ThinkBook 14',
      description: 'Intel i5, 14-inch, business laptop.',
      price: '$749',
      rating: '⭐️ 4.7',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTA4MzY1fGltYWdlL3BuZ3xoMWYvaDFhLzEwODI3NzU3NjgyNzE4LnBuZ3wyZTBlNDk4M2NmMTI1YjIzMDAzZTgxN2U4ZTYyOGMyYzU0MWFkNDRiOGE5NmUzYzNmY2Q0OTNkODIwOWE3YzVm/desktop-ideacentre-300serires-3-amd-gallery-9.png',
      alt: 'Lenovo IdeaCentre 3',
      title: 'Lenovo IdeaCentre 3',
      description: 'AMD Ryzen 5, desktop computer.',
      price: '$649',
      rating: '⭐️ 4.5',
      brand: 'Lenovo',
    },
    {
      imgSrc:
        'https://p4-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-legion-tower-5-05.png',
      alt: 'Lenovo Legion Tower 5',
      title: 'Lenovo Legion Tower 5',
      description: 'Gaming desktop, AMD Ryzen 7.',
      price: '$1,399',
      rating: '⭐️ 4.8',
      brand: 'Lenovo',
    },
  ],
  dellProducts: [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKb1WjsGrjvywGOytnLSKC5gjrfiPiwS2BA&s',
      alt: 'Dell XPS 13',
      title: 'Dell XPS 13',
      description: 'Intel i7, 13.4" InfinityEdge display.',
      price: '$1,199',
      rating: '⭐️ 4.9',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/pdp/laptop-inspiron-15-3520-pdp-gallery-504x350-bk.psd?fmt=png-alpha&wid=570&hei=400',
      alt: 'Dell Inspiron 15',
      title: 'Dell Inspiron 15',
      description: 'Intel i5, 15.6" FHD display.',
      price: '$699',
      rating: '⭐️ 4.5',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_yj7JK83UjWE-7MURzKZmncJVeBXt48yYQ&s',
      alt: 'Dell Alienware m15',
      title: 'Dell Alienware m15',
      description: 'Gaming laptop, NVIDIA GTX 1660 Ti.',
      price: '$1,499',
      rating: '⭐️ 4.8',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDXlmQyt30V6RiSDCIZUPPcJGh_4iGPUfHA&s',
      alt: 'Dell G5 Gaming Desktop',
      title: 'Dell G5 Gaming Desktop',
      description: 'Intel i7, NVIDIA GTX 1660 Super.',
      price: '$1,299',
      rating: '⭐️ 4.7',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://i.pcmag.com/imagery/reviews/02BOlpqqMIpSpObxdtAjOUn-8..v1569477142.jpg',
      alt: 'Dell P2419H Monitor',
      title: 'Dell P2419H 24" Monitor',
      description: 'IPS panel, ultra-thin bezels.',
      price: '$249',
      rating: '⭐️ 4.6',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://m.media-amazon.com/images/I/61CPjvkKW7S._AC_UF894,1000_QL80_.jpg',
      alt: 'Dell Latitude 7420',
      title: 'Dell Latitude 7420',
      description: 'Intel i7, business laptop.',
      price: '$1,499',
      rating: '⭐️ 4.8',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMw0513VvW2Vh0lCeOA9HdyNXDh6CB-yonQ&s',
      alt: 'Dell Inspiron 14',
      title: 'Dell Inspiron 14',
      description: 'Intel i3, 14" laptop.',
      price: '$549',
      rating: '⭐️ 4.4',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67chbPohgFHk_MTUuSD1lW067uPxNrM8ig&s',
      alt: 'Dell XPS 17',
      title: 'Dell XPS 17',
      description: 'Intel i9, 17" InfinityEdge display.',
      price: '$2,499',
      rating: '⭐️ 4.9',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3530/media-gallery/bk-pl-fpr/notebook-vostro-15-3530-nt-plastic-fpr-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=4669&hei=2876&qlt=100,1&resMode=sharp2&size=4669,2876&chrss=full&imwidth=5000',
      alt: 'Dell Vostro 15',
      title: 'Dell Vostro 15',
      description: 'Intel i5, business laptop.',
      price: '$699',
      rating: '⭐️ 4.5',
      brand: 'Dell',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1-uuxkJY_4MOVUtUN9i9JfLoROQbzROCHQ&s',
      alt: 'Dell UltraSharp U2720Q',
      title: 'Dell UltraSharp U2720Q 27" Monitor',
      description: '4K resolution, USB-C connectivity.',
      price: '$699',
      rating: '⭐️ 4.8',
      brand: 'Dell',
    },
  ],
};

const allProducts = [
  ...products.appleProducts,
  ...products.samsungProducts,
  ...products.lenovoProducts,
];

const getRandomProducts = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const newArrivalProducts = getRandomProducts(allProducts, 30);
const suggestedProducts = getRandomProducts(allProducts, 3);

// New arrivals
function redirectToDetails(title, brand, imgSrc, description, price, rating) {
  const url = `/detail.html?title=${title}&brand=${brand}&imgSrc=${imgSrc}&description=${description}&price=${price}&rating=${rating}`;
  location.href = url;
}

function renderNewArrivals() {
  const container = document.querySelector('.container__products__items');
  container.innerHTML = '';

  newArrivalProducts.forEach((newArrival) => {
    const newArrivalItem = `
      <div
        role="button"
        onclick="redirectToDetails('${encodeURIComponent(
          newArrival.title
        )}', '${encodeURIComponent(newArrival.brand)}', '${encodeURIComponent(
      newArrival.imgSrc
    )}', '${encodeURIComponent(newArrival.description)}', '${encodeURIComponent(
      newArrival.price
    )}', '${encodeURIComponent(newArrival.rating)}')"
        class="container__products__item"
      >
        <img
          src="${newArrival.imgSrc}"
          alt="${newArrival.alt}"
          class="products__icon"
        />
        <p class="products__title">${newArrival.title}</p>
        <p class="products__description">${newArrival.description}</p>
        <div class="products__price">
          <p>${newArrival.price}</p>
          <a>${newArrival.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += newArrivalItem;
  });
}

document.addEventListener('DOMContentLoaded', renderNewArrivals);

function renderSuggestions() {
  const container = document.querySelector(
    '.container__products__items-suggestion'
  );
  container.innerHTML = '';

  suggestedProducts.forEach((suggestion) => {
    const suggestionItem = `
      <div
        role="button"
        onclick="redirectToDetails('${encodeURIComponent(
          suggestion.title
        )}', '${encodeURIComponent(suggestion.brand)}', '${encodeURIComponent(
      suggestion.imgSrc
    )}', '${encodeURIComponent(suggestion.description)}', '${encodeURIComponent(
      suggestion.price
    )}', '${encodeURIComponent(suggestion.rating)}')"
        class="container__products__item"
      >
        <img
          src="${suggestion.imgSrc}"
          alt="${suggestion.alt}"
          class="products__icon"
        />
        <p class="products__title">${suggestion.title}</p>
        <p class="products__description">${suggestion.description}</p>
        <div class="products__price">
          <p>${suggestion.price}</p>
          <a>${suggestion.rating}</a>
        </div>
      </div>
    `;
    container.innerHTML += suggestionItem;
  });
}

document.addEventListener('DOMContentLoaded', renderSuggestions);
