import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import "../css/TopPage.css";

export function TopPage({
  setCurrentUrl,
}: {
  setCurrentUrl: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <h3>各開発ページへ遷移できます</h3>
      <h1>🌱スタートガイド</h1>
      <h2>
        <Link
          to="/tic-tac-toe"
          className="item-list"
          onClick={() => setCurrentUrl("/tic-tac-toe")}
        >
          チュートリアル：三目並べ
        </Link>
      </h2>
      <h1>🐣REACT を学ぶ</h1>
      <h2 className="learn-react">
        <Link
          to="/describing-the-ui"
          className="item-list"
          onClick={() => setCurrentUrl("/describing-the-ui")}
        >
          UI の記述
        </Link>
        <Link
          to="/adding-interactivity"
          className="item-list"
          onClick={() => setCurrentUrl("/adding-interactivity")}
        >
          インタラクティビティの追加
        </Link>
        <Link
          to="/managing-state"
          className="item-list"
          onClick={() => setCurrentUrl("/managing-state")}
        >
          state の管理
        </Link>
        <Link
          to="/escape-hatches"
          className="item-list"
          onClick={() => setCurrentUrl("/escape-hatches")}
        >
          避難ハッチ
        </Link>
      </h2>
    </>
  );
}
