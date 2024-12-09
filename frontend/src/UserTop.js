import React from 'react';
import './UserTop.css';
import pawloversLogo from './pawlovers.png';

function UserTop() {
  const handleHomeClick = () => {
    window.location.href = './mypage.html';
  };

  const handlePostClick = () => {
    window.location.href = './mypage.html';
  };

  const handleMyPageClick = () => {
    window.location.href = './mypage.html';
  };

  return (
    <div className="user-top-page">
      <div className="top">
        <img 
          src={pawloversLogo} 
          alt="pawlovers logo" 
          id="pawlovers-img" 
        />
        <button onClick={handlePostClick}>投稿する</button>
        <button onClick={handleMyPageClick}>マイページ</button>
      </div>
      
      <div className="bottom">
        <div id="advertisement">　広告　</div>
        <div id="media">　</div>
        <div id="advertisement">　広告　</div>
      </div>
    </div>
  );
}

export default UserTop;