import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gapi } from "gapi-script";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";

function App() {
  gapi.load("auth2", () => {
    gapi.auth2.init({
      client_id:
        "316868431139-7qv71uqbhiemcjb7u110h2f4p790gd74.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/userinfo.profile",
    });
  });

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
