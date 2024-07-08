import "../css/DescribingTheUiPage.css";

// 条件付きレンダー
// チャレンジ問題
// 3.連続する ? : を if と変数にリファクタ

function Drink({ name }: { name: "tea" | "coffee" }) {
  const drinks = {
    tea: {
      part: "leaf",
      caffeine: "15–70 mg/cup",
      age: "4,000+ years",
    },
    coffee: {
      part: "bean",
      caffeine: "80–185 mg/cup",
      age: "1,000+ years",
    },
  };
  const info = drinks[name];

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
