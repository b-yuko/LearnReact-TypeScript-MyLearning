import "../css/DescribingTheUiPage.css";

// 条件付きレンダー
// チャレンジ問題
// 1. ? : を使って未梱包アイコンを表示

interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  return (
    <li className="item">
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
