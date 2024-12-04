import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem('isAuthenticated');
  //   if (isAuthenticated !== 'true') {
  //     navigate('/');
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <h1>ダッシュボード</h1>
        <div className="user-info">
          <p>ようこそ、{username || 'ユーザー'}さん</p>
          <button onClick={handleLogout} className="logout-button">
            ログアウト
          </button>
        </div>
      </header>
      <main className="Dashboard-content">
        <section className="quick-actions">
          <h2>クイックアクション</h2>
          <div className="action-buttons">
            <button>プロフィール編集</button>
            <button>設定</button>
            <button>メッセージ</button>
          </div>
        </section>
        <section className="recent-activity">
          <h2>最近の活動</h2>
          <ul>
            <li>新しいメッセージが3件あります</li>
            <li>プロジェクト更新: 進行中</li>
            <li>アカウント情報が更新されました</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;