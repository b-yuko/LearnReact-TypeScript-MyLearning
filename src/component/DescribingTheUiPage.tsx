import "../css/DescribingTheUiPage.css";

// 条件付きレンダー
// チャレンジ問題
// 2. && 演算子を使ったアイテムの重要度の表示

interface ItemProps {
  name: string;
  importance: number;
}

function Item({ name, importance }: ItemProps) {
  const text = ` (Importance: ${importance})`;

  return (
    <li className="item">
      {name}
      {importance > 0 && <i>{text}</i>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} name="Space suit" />
        <Item importance={0} name="Helmet with a golden leaf" />
        <Item importance={6} name="Photo of Tam" />
      </ul>
    </section>
  );
}
