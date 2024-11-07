import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryContainer = ({ categories, onSelectCategory }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            categoryName={category.name}
            imageUrl={category.imageUrl}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
