import "../css/DescribingTheUiPage.css";

// コンポーネントに props を渡す
// チャレンジ問題
// 3. children に JSX を渡す

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
}

function Card({ children, title }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
