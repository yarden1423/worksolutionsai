import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chat from "./components/Chat";

export default function App() {
  return (
    <Container maxWidth>
      <Box sx={{ my: 4 }}>
        <Chat />
      </Box>
    </Container>
  );
}
