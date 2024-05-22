import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CVpage from "./pages/CVpage";
import HomePage from "./pages/HomePage";
import Suggestion from "./pages/Suggestions";

export default function App() {
  const jobs = [
    {
      ID: 1,
      jobTitle: "Software developer bla bla bla bla bla",
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
      ID: 2,
      jobTitle: "Software developer bla bla bla bla bla",
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
      jobTitle: "Software developer bla bla bla bla bla",
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
      ID: 4,
      jobTitle: "Software developer bla bla bla bla bla",
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
      ID: 5,
      jobTitle: "Software developer bla bla bla bla bla",
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
      ID: 6,
      jobTitle: "Software developer bla bla bla bla bla",
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cvpage" element={<CVpage />} />
        <Route path="/workplaces" element={<Suggestion jobs={jobs} />} />
      </Routes>
    </BrowserRouter>
  );
}
