import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import SpinningWheel from "./components/SpinningWheel";
import SharedPreset from "./components/ShareListModal";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<SpinningWheel />} />
      <Route path="/:presetSlug" element={<SpinningWheel />} />
      <Route path="/s/:id" element={<SpinningWheel />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
