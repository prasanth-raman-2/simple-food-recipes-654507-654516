import React, { useState } from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Combos', 'Sliders', 'Classic'];

  return (
    <nav className="categories">
      {categories.map(category => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Categories;
