import React from 'react';
//import { useNavigate } from 'react-router-dom'; // 追加
import '../top/top.css';

const TopPage = () => {
 // const navigate = useNavigate(); // React Routerのナビゲーションフック
  
  const handlePost = () => {
    console.log("投稿ボタンがクリックされました");
   // navigate('/post'); // 投稿ページへの遷移（例）
  };
  
  const handleRegister = () => {
    console.log("マイページボタンがクリックされました");
    //navigate('/mypage'); // マイページへの遷移（例）
  };

  return (
    <>
      {/* トップセクション */}
      <div className="top">
        <button onClick={handlePost}>投稿する</button>
        <button onClick={handleRegister}>マイページ</button>
      </div>

      {/* ボトムセクション */}
      <div className="bottom">
        <div className="advertisement">　広告　</div>
        <div id="media">　</div>
        <div className="advertisement">　広告　</div>
      </div>
    </>
  );
};

export default TopPage;
