import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RepositoryPage from './pages/RepositoryPage';

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/repository/:fullName" Component={RepositoryPage} />
    </Routes>
  );
};

export default RouterWrapper;
