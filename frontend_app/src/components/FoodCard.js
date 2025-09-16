import React, { useState } from 'react';
import '../styles/FoodCard.css';

const FoodCard = ({ title, rating, image }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="food-card">
      <img src={image} alt={title} />
      <div className="food-info">
        <h3>{title}</h3>
        <div className="rating">
          <span className="star-icon"></span>
          <span className="rating-text">{rating}</span>
        </div>
        <button 
          className={`heart-btn ${isLiked ? 'active' : ''}`}
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>
    </div>
  );
};

export default FoodCard;
