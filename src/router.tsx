import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterWrapper;
