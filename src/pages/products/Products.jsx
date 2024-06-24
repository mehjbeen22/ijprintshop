import React from 'react';
import ProductCategory from './ProductCategory';

const Products = () => {
  return (
    <main>
      <ProductCategory />
      <h1 className="text-center text-red-600 text-6xl p-5">
        Printers Products
      </h1>
      <section className="grid grid-cols-4 gap-4 m-10">
        {canonPrinters.map((printer) => (
          <div
            key={printer.id}
            className="max-w-sm mx-auto rounded overflow-hidden shadow-2xl bg-white p-3 border"
          >
            <img
              className="object-contain h-30 w-full border"
              src={printer.imageUrl}
              alt={printer.printerName}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                (Refurbished) {printer.printerName}
              </div>
              <p className="text-green-600">
                <span className="font-semibold">Original Price: </span> $
                {printer.originalPrice}
              </p>
              <p>
                Discount: {printer.discount}% <br />
              </p>
              <p className="text-red-600">
                Previous Price: ${printer.previousPrice}
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Features:
              </span>
              <ul className="list-disc">
                {printer.features.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
const canonPrinters = [
  {
    id: 1,
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2022/10/IO/SH/CI/25454439/canon-pixma-mg3620-wireless-inkjet-printer.jpg',
    printerName: 'Canon PIXMA MG3620',
    originalPrice: 99.99,
    discount: 15,
    previousPrice: 114.99,
    features: ['Wireless Printing', 'Auto Duplex Printing', 'Mobile Printing'],
    // Add additional fields as needed
  },
  {
    id: 2,
    imageUrl:
      'https://s3b.cashify.in/gpro/uploads/2022/08/08055427/canon-pixma-e4270-all-in-one-inkjet-front.jpg',
    printerName: 'Canon PIXMA TR8520',
    originalPrice: 179.99,
    discount: 10,
    previousPrice: 199.99,
    features: [
      'Wireless Printing',
      'Fax Functionality',
      'Automatic Document Feeder',
    ],
    // Add additional fields as needed
  },
  {
    id: 3,
    imageUrl: 'https://m.media-amazon.com/images/I/514LQewdPjL.jpg',
    printerName: 'Canon PIXMA TS8320',
    originalPrice: 129.99,
    discount: 20,
    previousPrice: 149.99,
    features: [
      'Wireless Printing',
      'Auto Duplex Printing',
      'Bluetooth Connectivity',
    ],
    // Add additional fields as needed
  },
  {
    id: 4,
    imageUrl:
      'https://s7d1.scene7.com/is/image/canon/8746B002_pixma-ip8720_6?fmt=webp-alpha',
    printerName: 'Canon PIXMA iP8720',
    originalPrice: 249.99,
    discount: 25,
    previousPrice: 299.99,
    features: ['Wireless Printing', 'CD/DVD Printing', 'Borderless Printing'],
    // Add additional fields as needed
  },
  {
    id: 5,
    imageUrl:
      'https://www.cla.canon.com/en_US/app/images/soho/icmf269dw/MF269dw-head-on-hero_279x186.gif',
    printerName: 'Canon imageCLASS MF269dw',
    originalPrice: 279.99,
    discount: 10,
    previousPrice: 309.99,
    features: ['Wireless Printing', 'Duplex Printing', 'ADF'],
    // Add additional fields as needed
  },
  {
    id: 6,
    imageUrl:
      'https://asia.canon/media/image/2018/04/27/0b8449c1cf5540cb8e1e951704565618_selphy_1300_b3.png',
    printerName: 'Canon SELPHY CP1300',
    originalPrice: 129.99,
    discount: 5,
    previousPrice: 134.99,
    features: [
      'Compact Size',
      'Wireless Printing',
      'Direct Printing from USB/SD',
    ],
    // Add additional fields as needed
  },
  {
    id: 7,
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2021/5/RK/WI/DK/26771445/canon-pixma-pro-100-82xt.jpg',
    printerName: 'Canon PIXMA PRO-100',
    originalPrice: 379.99,
    discount: 30,
    previousPrice: 409.99,
    features: ['Wireless Printing', '8 Ink System', 'CD/DVD Printing'],
    // Add additional fields as needed
  },
  {
    id: 8,
    imageUrl:
      'https://www.tanotis.com/cdn/shop/products/1470327371000_IMG_664857_1024x.jpg?v=1575981908',
    printerName: 'Canon MAXIFY MB5420',
    originalPrice: 329.99,
    discount: 15,
    previousPrice: 344.99,
    features: ['Wireless Printing', 'ADF', 'High Capacity Ink Tanks'],
    // Add additional fields as needed
  },
  {
    id: 9,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvzgzxnPT5IqO2rIYRhEHmg5Ow_xzqIZFAA&s',
    printerName: 'Canon IVY Mini Photo Printer',
    originalPrice: 99.99,
    discount: 10,
    previousPrice: 109.99,
    features: [
      'Compact Size',
      'Bluetooth Connectivity',
      'ZINK Printing Technology',
    ],
    // Add additional fields as needed
  },
  {
    id: 10,
    imageUrl: 'https://m.media-amazon.com/images/I/41WTnnhX-7L.jpg',
    printerName: 'Canon PIXMA TS3320',
    originalPrice: 79.99,
    discount: 5,
    previousPrice: 84.99,
    features: ['Wireless Printing', 'Auto Power On/Off', 'Mobile Printing'],
    // Add additional fields as needed
  },
  {
    id: 11,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsrAgwDFs0cKqy08MYla14TZlA7AoHTfcGA&s',
    printerName: 'Canon imagePROGRAF PRO-1000',
    originalPrice: 1299.99,
    discount: 100,
    previousPrice: 1399.99,
    features: ['Wireless Printing', '12 Ink System', 'Wide Format Printing'],
    // Add additional fields as needed
  },
  {
    id: 12,
    imageUrl: 'https://m.media-amazon.com/images/I/81s6IJav12L.jpg',
    printerName: 'Canon PIXMA TS9120',
    originalPrice: 149.99,
    discount: 20,
    previousPrice: 169.99,
    features: [
      'Wireless Printing',
      '6-Color Individual Ink System',
      'Touchscreen Display',
    ],
    // Add additional fields as needed
  },
];
