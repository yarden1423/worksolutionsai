import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CVpage from "./pages/CVpage";
import HomePage from "./pages/HomePage";
import Suggestion from "./pages/Suggestions";
import SignUp from "./pages/SignUp";
import { Typography } from "@mui/material";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Typography
        style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          background: "lightblue",
          padding: "7px",
          borderRadius: "10px",
          fontFamily: "cursive",
        }}
      >
        powered by gemini
      </Typography>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cvpage" element={<CVpage />} />
        <Route path="/workplaces" element={<Suggestion />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employeeworkplace" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
