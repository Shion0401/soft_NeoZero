import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/router";

export default function HomePage() {
  const [message, setMessage] = useState('');  // メッセージの状態を管理
  const [loading, setLoading] = useState(false);  // ローディング状態を管理
  const router = useRouter();

  const fetchMessage = async () => {
    setLoading(true);  // ローディングを開始
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mypage`);
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


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>ユーザ設定</h1>
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
      <button
        onClick={() => {
          router.back();
        }}
      >
        戻る
      </button>
    </div>
  );
}
