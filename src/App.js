import React from 'react';
import ShowDetails from './components/ShowDetails';
import ShowLists from './components/ShowLists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowLists />} />
      <Route path="/show/:id" element={<ShowDetails />} />
    </Routes>
  </BrowserRouter>

  
  );
}

export default App;
