import "./index.css";
import App from "./App";
import Gallery from "./components/Gallery";
import Valentine from "./components/Valentine";
import Quiz from "./components/Quiz";
import Note from "./components/Notepad";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Loader from "./components/Loader";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} loader={<Loader />} />
      <Route path="/valentine" element={<Valentine />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/notepad" element={<Note />} />
    </Routes>
  </BrowserRouter>
);
