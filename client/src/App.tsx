import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigationbar";
import FlipCardFront from "./components/flip-card-front";
import { Container } from "@mui/material";
import Home from "./layouts/Home";

const App = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ paddingTop: "auto", margin: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ElecQuestions/:subject" element={<FlipCardFront />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
