import React, { useState } from 'react';
import './LoginUser.css'; // Import the CSS file
import pawLoversLogo from './pawlovers-side.jpg'; // Assume the image is in the same directory

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempt with:', email);
    // In a real app, you would call an authentication service
    // navigation.navigate('/main') or similar
  };

  const handleRegister = () => {
    // Navigate to registration page
    // In a real React app, you'd use React Router or similar
    window.location.href = './Register.js';
  };

  return (
    <div className="login-container">
      <img 
        src={pawLoversLogo} 
        alt="pawlovers logo" 
        className="pawlovers-logo" 
      />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            placeholder="メールアドレスを入力してください"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            placeholder="パスワードを入力してください"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
          />
        </div>
        <button type="submit" className="login-button">
          ログイン
        </button>
        <p className="separator">
          ・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・
        </p>
        <button 
          type="button" 
          onClick={handleRegister} 
          className="register-button"
        >
          新規会員登録
        </button>
      </form>
    </div>
  );
};

export default LoginUser;