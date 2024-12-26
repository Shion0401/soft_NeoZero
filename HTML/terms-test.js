// ユーザの利用規約のページ 
// ボタンを押すとエラーが表示される。本来はエラー表示はされない。ログインの時にエラー表示がされる。

// ボタン要素とエラーメッセージ表示領域を取得
const agreeButton = document.getElementById("agree");
const errorMessage = document.getElementById("error-message");

// ボタンがクリックされたときのイベントを設定
agreeButton.addEventListener("click", () => {
    // メッセージを設定して表示
    errorMessage.textContent = "※間違っています、もう一度入力してください";
    errorMessage.style.display = "block";
});
