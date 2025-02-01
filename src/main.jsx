import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SpinningWheel from './components/SpinningWheel';
import PresetPage from './components/PresetPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SpinningWheel />} />
      <Route path="/preset/:presetSlug" element={<PresetPage />} />
      {/* ...other routes... */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
