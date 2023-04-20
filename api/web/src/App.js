import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Top from './pages/Top';
import Result from './pages/result/Result';
import Show from './pages/show/Show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/result' element={<Result />} />
        <Route path='/show' element={<Show/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
