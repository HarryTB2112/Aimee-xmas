import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, AnniversaryPage, XmasPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anniversary" element={<AnniversaryPage />} />
      <Route path="/xmas" element={<XmasPage />} />
    </Routes>
  );
}

export default App;
