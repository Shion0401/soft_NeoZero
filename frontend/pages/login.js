import { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import axios from 'axios';


export default function HomePage() {
    const router = useRouter();
    const [message, setMessage] = useState('');  // メッセージの状態を管理
    const [loading, setLoading] = useState(false);  // ローディング状態を管理
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // ページのリロードを防ぐ
        try {
          const response = await axios.post('http://localhost:8000/users/login', {
            email: email,
            password: password
          });
          if (response.data === null){
            setResponseMessage('間違ってるよ');
          }else{
            setResponseMessage('ログインできたよ');
            // const user_id = response.data;  // 例えば response.data がユーザーID
            // const url = `http://localhost:3000/home?user_id=${user_id}`;  // URLを作成
            // router.push(url);  // ページ遷移
            router.push(`http://localhost:3000/home?user_id=${response.data}`);  // 1行でページ遷移
          }
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
                    <label htmlFor="password">パスワード:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">ログイン</button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
            <p>
                <Link href={`/register`}>新規登録はこちら</Link>
            </p>
        </div>
    );
}
