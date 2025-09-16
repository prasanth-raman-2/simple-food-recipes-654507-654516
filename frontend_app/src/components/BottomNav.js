import React, { useState } from 'react';
import '../styles/BottomNav.css';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <span className="home-icon"></span>
      </button>
      <button 
        className={`nav-btn ${activeTab === 'user' ? 'active' : ''}`}
        onClick={() => setActiveTab('user')}
      >
        <span className="user-icon"></span>
      </button>
      <button className="add-btn">
        <span className="plus-icon"></span>
      </button>
      <button 
        className={`nav-btn ${activeTab === 'comment' ? 'active' : ''}`}
        onClick={() => setActiveTab('comment')}
      >
        <span className="comment-icon"></span>
      </button>
      <button 
        className={`nav-btn ${activeTab === 'heart' ? 'active' : ''}`}
        onClick={() => setActiveTab('heart')}
      >
        <span className="heart-icon"></span>
      </button>
    </nav>
  );
};

export default BottomNav;
