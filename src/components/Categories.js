import React from "react";
import "../styles/Categories.css";

const Categories = ({ categories, handleCategories, value }) => {
  return (
    <div>
      <form>
        <label>
          Categories:
          <select className="select" value={value} onChange={handleCategories}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Categories;
