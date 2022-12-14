import React from "react";

const CategoryCard = ({category}) => {
  return (
    <div className="flex items-center space-x-2.5 py-6 px-4 border rounded-lg cursor-pointer">
      <img src={category.icon} alt="" />
      <p className="text-sm text-text">
        {category.title}
      </p>
    </div>
  );
};

export default CategoryCard;
