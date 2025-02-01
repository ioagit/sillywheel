import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SpinningWheel from './components/SpinningWheel';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SpinningWheel />} />
      <Route path="/:presetSlug" element={<SpinningWheel />} />
      {/* Removed any PresetPage route */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
