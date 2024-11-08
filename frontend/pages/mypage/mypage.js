import Link from "next/link";
import { useState } from 'react';
import { useRouter } from "next/router";

export default function HomePage() {
    const [message, setMessage] = useState('');  // メッセージの状態を管理
    const [loading, setLoading] = useState(false);  // ローディング状態を管理
    const router = useRouter();

    //以下画面表示
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Welcome to the SNS App</h1>
            <h1>Second Detail</h1>
            <p>
                <Link href={"/mypage/user"}>ユーザ設定へ</Link>
            </p>
            <h1>Second</h1>
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
