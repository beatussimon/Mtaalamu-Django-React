import React from 'react';

const CategoryCard = ({ categoryName, imageUrl, onSelectCategory }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onSelectCategory(categoryName)}
    >
      {/* Category Image */}
      <img className="w-full h-48 object-cover" src={imageUrl} alt={categoryName} />
      
      {/* Category Name */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{categoryName}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
