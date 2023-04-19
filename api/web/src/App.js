import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './pages/Top';
import Result from './pages/result/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
