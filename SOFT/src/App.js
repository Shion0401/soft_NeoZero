import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';  // ログインページ
import TopPage from './top/top';  // トップページ

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage />} /> {/* 初期表示でログインページ */}
          <Route path="/login" element={<LoginPage />} /> {/* ログインページ */}
          <Route path="/top" element={<TopPage />} /> {/* トップページ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
