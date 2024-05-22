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
  const jobs = [
    {
      ID: 1,
      jobTitle: "נודר נדר",
      description:
        "אני מחפש אנשים שרוצים לתת את כל מה שיש להם, אוהבים לעבוד ועובדים על אהבה, מחפשים את האחד ומוכנים לחכות",
      location: "רעננה",
      companyName: "Redhat",
      skills: [
        { id: 1, name: "Java" },
        { id: 2, name: "Python" },
        { id: 3, name: "C++" },
      ],
      contactInfo: "0522803670",
      link: "https://www.youtube.com/watch?v=HxD5La2BlwQ",
    },
    {
      ID: 2,
      jobTitle: "מקם",
      description: "I am looking for a software developer",
      location: "Raanana",
      companyName: "Redhat",
      skills: [
        { id: 1, name: "Java" },
        { id: 2, name: "Python" },
        { id: 3, name: "C++" },
      ],
      contactInfo: "0522803670",
      link: "https://www.youtube.com/watch?v=HxD5La2BlwQ",
    },
    {
      ID: 3,
      jobTitle: "מפתח חקלאי",
      description: "I am looking for a software developer",
      location: "Raanana",
      companyName: "Redhat",
      skills: [
        { id: 1, name: "Java" },
        { id: 2, name: "Python" },
        { id: 3, name: "C++" },
      ],
      contactInfo: "0522803670",
      link: "https://www.youtube.com/watch?v=HxD5La2BlwQ",
    },
  ];

  return (
    <BrowserRouter>
      <Typography
        style={{
          position: "absolute",
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
        <Route path="/workplaces" element={<Suggestion jobs={jobs} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
