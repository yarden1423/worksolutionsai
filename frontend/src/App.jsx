import * as React from "react";
import Navbar from "./components/Navbar";
import CVpage from "./pages/CVpage";
import HomePage from "./pages/homePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cvpage" element={<CVpage />} />
      </Routes>
    </BrowserRouter>
  );
}
