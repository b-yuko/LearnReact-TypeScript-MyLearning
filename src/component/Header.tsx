import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import "../css/Header.css";

interface HeaderProps {
  currentUrl: string;
  setCurrentUrl: Dispatch<SetStateAction<string>>;
}

export function Header({ currentUrl, setCurrentUrl }: HeaderProps) {
  let returnLinkComponent: JSX.Element;
  if (currentUrl === "/") {
    returnLinkComponent = <></>;
  } else {
    returnLinkComponent = (
      <Link to="/" onClick={() => setCurrentUrl("/")}>
        Top Page へ戻る
      </Link>
    );
  }

  let titleComponent: JSX.Element;
  switch (currentUrl) {
    case "/tic-tac-toe":
      titleComponent = (
        <h1 className="title-component">チュートリアル：三目並べ</h1>
      );
      break;
    case "/describing-the-ui":
      titleComponent = <h1 className="title-component">UI の記述</h1>;
      break;
    case "/adding-interactivity":
      titleComponent = (
        <h1 className="title-component">インタラクティビティの追加</h1>
      );
      break;
    case "/managing-state":
      titleComponent = <h1 className="title-component">state の管理</h1>;
      break;
    case "/escape-hatches":
      titleComponent = <h1 className="title-component">避難ハッチ</h1>;
      break;
    default:
      titleComponent = <></>;
  }

  return (
    <>
      <div className="return-link">{returnLinkComponent}</div>
      {titleComponent}
    </>
  );
}
