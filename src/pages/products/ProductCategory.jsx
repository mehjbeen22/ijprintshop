import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
  const [activeCategory, setActiveCategory] = useState('printers');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-white shadow-2xl p-4 text-center">
      <Link
        to="/shop"
        onClick={() => handleCategoryClick('printers')}
        className={`mx-5 text-lg border ${
          activeCategory === 'printers'
            ? 'border-red-600 text-red-600'
            : 'border-gray-600 text-gray-600'
        } px-8 py-2 transition-colors duration-300 hover:text-white hover:bg-red-600 hover:border-red-600`}
      >
        Printers
      </Link>
      <Link
        to="/keyboards"
        onClick={() => handleCategoryClick('keyboards')}
        className={`mx-5 text-lg border ${
          activeCategory === 'keyboards'
            ? 'border-red-600 text-red-600'
            : 'border-gray-600 text-gray-600'
        } px-8 py-2 transition-colors duration-300 hover:text-white hover:bg-red-600 hover:border-red-600`}
      >
        Keyboards
      </Link>
      <Link
        to="/mouse"
        onClick={() => handleCategoryClick('mouse')}
        className={`mx-5 text-lg border ${
          activeCategory === 'mouse'
            ? 'border-red-600 text-red-600'
            : 'border-gray-600 text-gray-600'
        } px-8 py-2 transition-colors duration-300 hover:text-white hover:bg-red-600 hover:border-red-600`}
      >
        Mouse
      </Link>
    </div>
  );
};

export default ProductCategory;
