import "../css/DescribingTheUiPage.css";

// コンポーネントを純粋に保つ
// チャレンジ問題
// 1. 壊れた時計を修理

import { useState, useEffect } from "react";

function useTime() {
  const [time, setTime] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  return <Clock time={time} />;
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
