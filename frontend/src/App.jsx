import * as React from "react";
import Container from "@mui/material/Container";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import CVpage from "./pages/CVpage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
      <Container maxWidth={false}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/cvpage" element={<CVpage />} />
          </Routes>
        </BrowserRouter>
      </Container>
  );
}
