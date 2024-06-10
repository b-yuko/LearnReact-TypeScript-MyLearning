import "../css/DescribingTheUiPage.css";
import { Fragment } from "react";

// リストのレンダー
// チャレンジ問題
// 4. セパレータ付きリスト

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={index}>
          <p>{line}</p>
          {poem.lines.length - 1 > index && <hr />}
        </Fragment>
      ))}
    </article>
  );
}
