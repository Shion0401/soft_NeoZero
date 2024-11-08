import { useState } from 'react';
import Link from "next/link";
import axios from 'axios';


export default function HomePage() {
    const [message, setMessage] = useState('');  // メッセージの状態を管理
    const [loading, setLoading] = useState(false);  // ローディング状態を管理
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // APIからメッセージを取得する関数
    const fetchMessage = async () => {
        setLoading(true);  // ローディングを開始
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setMessage('Failed to load message');
        } finally {
            setLoading(false);  // ローディングを終了
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // ページのリロードを防ぐ
    
        try {
          const response = await axios.get('http://localhost:8000/users/login', {
            email: email,
            password: password
          });
          setResponseMessage('ログインできたよ');
        } catch (error) {
          setResponseMessage('エラーが発生しました。');
          console.error(error);
        }
      };

    //以下画面表示
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Welcome to the SNS App</h1>
            <div>
                <h1>ログイン</h1>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">メールアドレス:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">pass:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">登録</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
            <p>
                <Link href={`/second/test`}>新規登録はこちら</Link>
            </p>
            <button
                onClick={fetchMessage}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch Message'}
            </button>
            <p style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
                {message}
            </p>
        </div>
    );
}
