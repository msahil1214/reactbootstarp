import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import CharactersList from "./components/CharactersList";
import { Route, Router, Routes } from "react-router";
import Character from "./components/Character";
import Navbar1 from "../src/components/NavBar.jsx";
import Card1 from "../src/components/Card.jsx";

export default function App() {
  return function App() {
    return (
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<CharactersList />} />
          </Routes>
        </div>
      </>
    );
  };
}
