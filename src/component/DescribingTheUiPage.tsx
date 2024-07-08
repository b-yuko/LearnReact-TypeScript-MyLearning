import "../css/DescribingTheUiPage.css";

// コンポーネントに props を渡す
// チャレンジ問題
// 2. props に基づく画像サイズ変更

interface Person {
  name: string;
  imageId: string;
}

function getImageUrl(person: Person, size: string) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

const ratio = window.devicePixelRatio;

interface AvatarProps {
  person: Person;
  size: number;
}

function Avatar({ person, size }: AvatarProps) {
  let thumbnailSize = "s";
  if (size * ratio > 90) {
    thumbnailSize = "b";
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={70}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}
