import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // ページのリロードを防ぐ

    try {
      const response = await axios.post('http://localhost:8000/users/register', {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 200){
        router.back();
      }
    } catch (error) {
      setResponseMessage('エラーが発生しました。');
      console.error(error);
    }
  };


  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">名前:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <label htmlFor="password">パスワード:</label>
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
  );
}
