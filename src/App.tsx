import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./component/TopPage.tsx";
import { Header } from "./component/Header.tsx";
import TicTacToePage from "./component/TicTacToe.tsx";
import DescribingTheUiPage from "./component/DescribingTheUiPage.tsx";
import AddingInteractivityPage from "./component/AddingInteractivityPage.tsx";
import ManagingStatePage from "./component/ManagingStatePage.tsx";
import EscapeHatchesPage from "./component/EscapeHatchesPage.tsx";

export function App() {
  const [currentUrl, setCurrentUrl] = useState<string>("/");

  return (
    <>
      <Header currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} />
      <Routes>
        <Route path="/" element={<TopPage setCurrentUrl={setCurrentUrl} />} />
        <Route path="/tic-tac-toe" element={<TicTacToePage />} />
        <Route path="/describing-the-ui" element={<DescribingTheUiPage />} />
        <Route
          path="/adding-interactivity"
          element={<AddingInteractivityPage />}
        />
        <Route path="/managing-state" element={<ManagingStatePage />} />
        <Route path="/escape-hatches" element={<EscapeHatchesPage />} />
      </Routes>
    </>
  );
}
