import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/home.js";
import History from "./routes/history";
import Dashboard from "./routes/dashboard";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
