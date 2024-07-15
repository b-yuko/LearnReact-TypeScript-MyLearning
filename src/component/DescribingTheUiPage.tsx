import "../css/DescribingTheUiPage.css";

// コンポーネントを純粋に保つ
// チャレンジ問題
// 2. 壊れたプロフィールを修正する

import { ReactNode, useState } from "react";

function getImageUrl(person: Person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Panel({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}

function Header({ name }: { name: string }) {
  return <h1>{name}</h1>;
}

function Avatar(person: Person) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

interface Person {
  imageId: string;
  name: string;
}

function Profile({ person }: { person: Person }) {
  return (
    <Panel>
      <Header {...person} />
      <Avatar {...person} />
    </Panel>
  );
}

export default function App() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}
