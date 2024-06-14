/*
  state：コンポーネントのメモリ
  チャレンジ問題
  4. 不要な state を削除
*/

import "../css/AddingInteractivityPage.css";

export default function FeedbackForm() {
  function handleClick() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
