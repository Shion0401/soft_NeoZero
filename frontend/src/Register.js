import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (formData.password !== formData.confirmPassword) {
      alert('パスワードが一致しません');
      return;
    }
    // Redirect to login page or submit form
    window.location.href = './login.html';
  };

  return (
    <div className="registration-container">
      <div id="information">会員情報登録</div>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="email">メールアドレス<span>※</span></label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="item">
          <label htmlFor="name">ニックネーム<span>※</span><br />(ペットの名前)</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="item">
          <label htmlFor="password">パスワード<span>※</span></label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            maxLength={16}
            required 
          />
        </div>
        <p id="note">※半角英数字8~16文字</p>
        <div className="item">
          <label htmlFor="confirmPassword">パスワード<span>※</span><br />(再確認)</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={8}
            maxLength={16}
            required 
          />
        </div>
        <div className="item">
          <label htmlFor="comment">フリーコメント</label>
          <textarea 
            id="comment" 
            placeholder="ペットの性別や年齢、コメントなど(100文字以内)" 
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            maxLength={100}
          ></textarea>
        </div>
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Registration;