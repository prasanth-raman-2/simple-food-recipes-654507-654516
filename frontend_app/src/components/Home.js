import React from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';
import FoodCard from './FoodCard';
import BottomNav from './BottomNav';
import '../styles/Home.css';
import profileImage from '../assets/figma_image_1_54.png';

const foodItems = [
  {
    id: 1,
    title: "Cheeseburger Wendy's Burger",
    rating: "4.9",
    image: require('../assets/figma_image_1_83.png')
  },
  {
    id: 2,
    title: "Hamburger Veggie Burger",
    rating: "4.8",
    image: require('../assets/figma_image_1_92.png')
  },
  {
    id: 3,
    title: "Hamburger Chicken Burger",
    rating: "4.6",
    image: require('../assets/figma_image_1_101.png')
  },
  {
    id: 4,
    title: "Hamburger Fried Chicken Burger",
    rating: "4.5",
    image: require('../assets/figma_image_1_110.png')
  }
];

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <h1 className="logo">Foodgo</h1>
          <p className="subtitle">Order your favourite food!</p>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </header>

      <SearchBar />
      <Categories />

      <div className="food-grid">
        {foodItems.map(item => (
          <FoodCard
            key={item.id}
            title={item.title}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
