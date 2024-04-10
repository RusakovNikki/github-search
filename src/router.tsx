import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default RouterWrapper;
