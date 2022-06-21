import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { gapi } from "gapi-script";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Auth from "./components/auth/Auth";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  gapi.load("auth2", () => {
    gapi.auth2.init({
      client_id:
        "316868431139-7qv71uqbhiemcjb7u110h2f4p790gd74.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/userinfo.profile",
    });
  });

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route
            path="/auth"
            exact
            element={!user ? <Auth /> : <Navigate to="/posts/" />}
          />
          {/* <Route path="/auth" exact component={<Auth />} /> */}
        </Routes>
        {/* <Home /> */}
        {/* <Auth /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
