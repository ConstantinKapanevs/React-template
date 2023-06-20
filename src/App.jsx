import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main.jsx";

function App() {
  return (
    <React.Fragment>
      <nav>
        <Link to="">Home</Link>
        <Link to={"/main"}>Main</Link>
      </nav>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
