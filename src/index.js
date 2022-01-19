import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Destination from "./modules/Destination";
import Crew from "./modules/Crew";
import Home from "./modules/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Technology from "./modules/Technology";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
