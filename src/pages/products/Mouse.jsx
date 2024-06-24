import ProductCategory from './ProductCategory';

const MouseProductList = () => {
  return (
    <>
      <ProductCategory />
      <div className="bg-gray-100 text-gray-900 min-h-screen p-4">
        <h1 className='text-center text-red-600 text-6xl p-5'>Mouse Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mouseProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 bg-white"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.imageUrl} // Placeholder image if imageUrl is empty
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
              <h2 className="text-xl font-semibold">
                (Refurbished) {product.name}
              </h2>
              <p className="text-gray-600">{product.brand}</p>
              <p className="text-green-700 font-bold">
                Price : ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600">DPI: {product.dpi}</p>
              <p className="text-gray-600">Connection: {product.connection}</p>
              <p className="text-gray-600">
                Wireless: {product.wireless ? 'Yes' : 'No'}
              </p>
              <ul className="list-disc list-inside mt-2 ">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
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

export default MouseProductList;

const mouseProducts = [
  {
    id: 1,
    name: 'Logitech MX Master 3',
    brand: 'Logitech',
    price: 99.99,
    dpi: 4000,
    wireless: true,
    connection: 'Bluetooth, USB',
    features: [
      'Ergonomic design',
      'Customizable buttons',
      'Fast scrolling',
      'Rechargeable battery',
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/613a-3jtieL.jpg', // Add actual image URL here
  },
  {
    id: 2,
    name: 'Razer DeathAdder V2',
    brand: 'Razer',
    price: 69.99,
    dpi: 20000,
    wireless: false,
    connection: 'USB',
    features: [
      'Optical sensor',
      'Ergonomic design',
      'RGB lighting',
      'Programmable buttons',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnZt_IC0-Z3XBl2mJq3T982CWxXtL7AqWgg&s', // Add actual image URL here
  },
  {
    id: 3,
    name: 'Apple Magic Mouse 2',
    brand: 'Apple',
    price: 79.99,
    dpi: 1300,
    wireless: true,
    connection: 'Bluetooth',
    features: [
      'Multi-Touch surface',
      'Rechargeable battery',
      'Sleek design',
      'Lightweight',
    ],
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zV-h5OMCW8fAPmPMvJChReg930e5oEq-Sw&s', // Add actual image URL here
  },
  {
    id: 4,
    name: 'Microsoft Surface Mouse',
    brand: 'Microsoft',
    price: 49.99,
    dpi: 1000,
    wireless: true,
    connection: 'Bluetooth',
    features: [
      'Ambidextrous design',
      'Metal scroll wheel',
      'Elegant design',
      'Long battery life',
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/514apCBOV+L.jpg', // Add actual image URL here
  },
  {
    id: 5,
    name: 'Corsair Dark Core RGB Pro SE',
    brand: 'Corsair',
    price: 89.99,
    dpi: 18000,
    wireless: true,
    connection: 'Bluetooth, USB',
    features: [
      'Customizable RGB lighting',
      'Qi wireless charging',
      'Ergonomic design',
      '9 programmable buttons',
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/61RdgVQ43TL.jpg', // Add actual image URL here
  },
  {
    id: 6,
    name: 'SteelSeries Rival 600',
    brand: 'SteelSeries',
    price: 79.99,
    dpi: 12000,
    wireless: false,
    connection: 'USB',
    features: [
      'Dual sensor system',
      'Adjustable weight system',
      'RGB lighting',
      'Split-trigger buttons',
    ],
    imageUrl:
      '  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3ixfVqPvh3_BhxI7N7pfabaCPe-faWtoiw&s',
  },
  {
    id: 7,
    name: 'Logitech G Pro Wireless',
    brand: 'Logitech',
    price: 129.99,
    dpi: 16000,
    wireless: true,
    connection: 'Bluetooth, USB',
    features: [
      'Lightweight design',
      'RGB lighting',
      'Hero sensor',
      'Long battery life',
    ],
    imageUrl:
      'https://computersolutionranchi.com/wp-content/uploads/2022/04/910-005274-image-1-600x600-1.jpg', // Add actual image URL here
  },
  {
    id: 8,
    name: 'Razer Naga Trinity',
    brand: 'Razer',
    price: 99.99,
    dpi: 16000,
    wireless: false,
    connection: 'USB',
    features: [
      'Interchangeable side plates',
      'RGB lighting',
      'Ergonomic design',
      '12 programmable buttons',
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/51gWmzc-WAL.jpg', // Add actual image URL here
  },
  {
    id: 9,
    name: 'HP X3000 Wireless Mouse',
    brand: 'HP',
    price: 19.99,
    dpi: 1200,
    wireless: true,
    connection: 'Bluetooth',
    features: [
      'Ambidextrous design',
      'Compact size',
      'Scroll wheel',
      'Long battery life',
    ],
    imageUrl:
      'https://5.imimg.com/data5/HY/LA/JR/GLADMIN-33753135/hp-20x3000-800x800-500x500.jpg', // Add actual image URL here
  },
  {
    id: 10,
    name: 'Logitech M185 Wireless Mouse',
    brand: 'Logitech',
    price: 14.99,
    dpi: 1000,
    wireless: true,
    connection: 'Bluetooth',
    features: [
      'Simple and reliable',
      'Compact size',
      'Long battery life',
      'Plug and play',
    ],
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2023/2/HF/IK/PJ/25753242/second-hand-laptop-500x500.jpg', // Add actual image URL here
  },
  {
    id: 11,
    name: 'Anker Vertical Ergonomic Optical Mouse',
    brand: 'Anker',
    price: 24.99,
    dpi: 1600,
    wireless: true,
    connection: 'USB',
    features: [
      'Ergonomic design',
      '5 buttons',
      'Adjustable DPI',
      'Battery-powered',
    ],
    imageUrl:
      'https://m.media-amazon.com/images/I/61KDtOc39AL._AC_UF1000,1000_QL80_.jpg', // Add actual image URL here
  },
  {
    id: 12,
    name: 'ASUS ROG Gladius II',
    brand: 'ASUS',
    price: 89.99,
    dpi: 12000,
    wireless: false,
    connection: 'USB',
    features: [
      'Customizable Aura Sync RGB lighting',
      'Swappable switches',
      'Ergonomic design',
      '6 programmable buttons',
    ],
    imageUrl: 'https://shedmart.in/wp-content/uploads/2021/01/811-1.jpg.webp', // Add actual image URL here
  },
];
