import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          {/* <Route path="/auth" exact component={<Auth />} /> */}
        </Routes>
        {/* <Home /> */}
        {/* <Auth /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
