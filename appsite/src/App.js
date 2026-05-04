import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppSite from "./AppSite";
// import PartnerPresentation from "./PartnerPresentation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppSite />} />
        {/* <Route path="/partners" element={<PartnerPresentation />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
