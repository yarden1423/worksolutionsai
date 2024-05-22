import * as React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/homePage/homePage";
import CVpage from "./pages/CVpage";

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
