import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppSite from "./AppSite";
import ManagerPresentation from "./ManagerPresentation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AppSite />} /> */}
        <Route path="/" element={<ManagerPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}
