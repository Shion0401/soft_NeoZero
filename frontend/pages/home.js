import { useRouter } from 'next/router';
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const router = useRouter();
    const { user_id } = router.query;  // URLからuserIdを取得
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user_id) {
            // ユーザーIDに基づいてデータを取得
            axios.get(`http://localhost:8000/users/${user_id}`)
                .then(response => setUserData(response.data))
                .catch(error => console.error(error));
        }
    }, [user_id]);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <h1>ようこそ、{userData.name}さん！</h1>
            <p>メールアドレス: {userData.email}</p>
            {/* ユーザー情報に基づく内容を表示 */}
        </div>
    );
};

export default Dashboard;
