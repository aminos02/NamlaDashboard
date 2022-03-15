import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Edge from "./pages/edge/Edge";
import Devices from "./pages/devices/Devices";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/edge" element={<Edge />} />
          <Route exact path="/devices" element={<Devices />} />
          {/* <Home /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
