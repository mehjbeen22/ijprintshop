import ProductCategory from './ProductCategory';

const KeyboardProductList = () => {
  return (
    <>
      <ProductCategory />
      <div className="bg-gray-100 text-gray-900 min-h-screen p-4">
        <h1 className="text-center text-red-600 text-6xl p-5">
          Keyboard Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyboardProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 bg-white"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.imageUrl} // Placeholder image if imageUrl is empty
                  alt={product.name}
                  className="w-32 h-32 object-contain rounded-full border-2 border-gray-300"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                ( Refurbished ){product.name}
              </h2>
              <p className="text-gray-700">{product.brand}</p>
              <p className="text-green-700 font-bold">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700">Type: {product.type}</p>
              <p className="text-gray-700">Connection: {product.connection}</p>
              <p className="text-gray-700">Switch Type: {product.switchType}</p>
              <ul className="text-gray-700 mt-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyboardProductList;

const keyboardProducts = [
  {
    id: 1,
    name: 'Logitech MX Keys',
    brand: 'Logitech',
    price: 99.99,
    type: 'Wireless',
    connection: 'Bluetooth, USB',
    switchType: 'Scissor',
    features: [
      'Backlit keys',
      'Rechargeable battery',
      'Ergonomic design',
      'Multi-device support',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhTQ3Uq-_cK1O62OQ_IHm9WuKAAzvDdZPBA&s', // Add actual image URL here
  },
  {
    id: 2,
    name: 'Razer BlackWidow V3',
    brand: 'Razer',
    price: 139.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'RGB lighting',
      'Durable design',
      'Programmable keys',
      'Ergonomic wrist rest',
    ],
    imageUrl:
      'https://elitehubs.com/cdn/shop/products/razer-blackwidow-v3-mini-wireless-green-switch-image-01-600x600_result-2.jpg?v=1683974174', // Add actual image URL here
  },
  {
    id: 3,
    name: 'Apple Magic Keyboard',
    brand: 'Apple',
    price: 99.99,
    type: 'Wireless',
    connection: 'Bluetooth',
    switchType: 'Scissor',
    features: [
      'Slim design',
      'Rechargeable battery',
      'Multi-device support',
      'Compact size',
    ],
    imageUrl:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK293_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628007108000', // Add actual image URL here
  },
  {
    id: 4,
    name: 'Corsair K95 RGB Platinum XT',
    brand: 'Corsair',
    price: 199.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'RGB lighting',
      'Programmable macro keys',
      'Durable design',
      'Detachable wrist rest',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrtpHYuNBEjY2YL2zLkzwQCvljiTtgVHpdA&s', // Add actual image URL here
  },
  {
    id: 5,
    name: 'SteelSeries Apex Pro',
    brand: 'SteelSeries',
    price: 199.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'Adjustable actuation switches',
      'OLED smart display',
      'RGB lighting',
      'Durable design',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYDgKpFPpXb7eQ9ez1lb0_LPyLXb7jM-85w&s', // Add actual image URL here
  },
  {
    id: 6,
    name: 'Microsoft Surface Keyboard',
    brand: 'Microsoft',
    price: 89.99,
    type: 'Wireless',
    connection: 'Bluetooth',
    switchType: 'Scissor',
    features: [
      'Ergonomic design',
      'Slim profile',
      'Quiet typing',
      'Long battery life',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMRpEGzEDyjSrNi_2oSikRVDHVl8Hu_SpEw&s', // Add actual image URL here
  },
  {
    id: 7,
    name: 'HyperX Alloy FPS Pro',
    brand: 'HyperX',
    price: 69.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'Compact design',
      'Red LED backlighting',
      'Durable design',
      'Detachable cable',
    ],
    imageUrl:
      'https://i.rtings.com/assets/products/4A0krySf/hyperx-alloy-fps-pro/design-medium.jpg?format=auto', // Add actual image URL here
  },
  {
    id: 8,
    name: 'Logitech G915 TKL',
    brand: 'Logitech',
    price: 229.99,
    type: 'Wireless',
    connection: 'Bluetooth, USB',
    switchType: 'Mechanical',
    features: [
      'RGB lighting',
      'Low profile switches',
      'Compact design',
      'LightSpeed wireless technology',
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/61V2O4vbYhL.jpg', // Add actual image URL here
  },
  {
    id: 9,
    name: 'Razer Huntsman Elite',
    brand: 'Razer',
    price: 199.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Opto-Mechanical',
    features: [
      'RGB lighting',
      'Magnetic wrist rest',
      'Durable design',
      'Programmable keys',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpIoQ5o3AbPA1eIfV_kGdjATSgD8w6CeNOg&s', // Add actual image URL here
  },
  {
    id: 10,
    name: 'Ducky One 2 Mini',
    brand: 'Ducky',
    price: 109.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'Compact design',
      'RGB lighting',
      'Detachable cable',
      'Durable design',
    ],
    imageUrl:
      'https://i.rtings.com/assets/products/cVIV7Lc4/ducky-one-2-mini-v1/design-medium.jpg?format=auto', // Add actual image URL here
  },
  {
    id: 11,
    name: 'ASUS ROG Strix Scope',
    brand: 'ASUS',
    price: 119.99,
    type: 'Wired',
    connection: 'USB',
    switchType: 'Mechanical',
    features: [
      'RGB lighting',
      'Durable design',
      'Programmable keys',
      'Compact size',
    ],
    imageUrl:
      'https://drr622wuctn26.cloudfront.net/image/cache/catalog/keyboard/asus/rog-strix-scope-nx-wireless-deluxe/rog-strix-scope-nx-wireless-deluxe-image-main-600x600.jpg', // Add actual image URL here
  },
  {
    id: 12,
    name: 'HP K3500 Wireless Keyboard',
    brand: 'HP',
    price: 29.99,
    type: 'Wireless',
    connection: 'Bluetooth',
    switchType: 'Membrane',
    features: [
      'Compact design',
      'Long battery life',
      'Quiet typing',
      'Plug and play',
    ],
    imageUrl:
      'https://5.imimg.com/data5/SX/QA/MY-3324476/wireless-keyboard-250x250.jpg', // Add actual image URL here
  },
];
