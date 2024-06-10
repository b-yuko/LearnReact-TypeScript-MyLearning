import "../css/DescribingTheUiPage.css";

// リストのレンダー
// チャレンジ問題
// 1. リストを 2 つに分割

interface Person {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

const people: Person[] = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

function getImageUrl(person: Person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

interface ListSectionProps {
  title: string;
  people: Person[];
}

function ListSection({ title, people }: ListSectionProps) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemists: Person[] = [];
  const everyoneElse: Person[] = [];
  for (const person of people) {
    if (person.profession === "chemist") {
      chemists.push(person);
    } else {
      everyoneElse.push(person);
    }
  }

  return (
    <>
      <article>
        <ListSection title="Chemists" people={chemists} />
      </article>
      <article>
        <ListSection title="Everyone Else" people={everyoneElse} />
      </article>
    </>
  );
}
