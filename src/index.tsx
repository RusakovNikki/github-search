import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterWrapper from './router';
import './index.scss';
import Container from './components/core/Container';
import Header from './components/feature/Header';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container width="70%">
        <Header title="GitHub search" />
        <RouterWrapper />
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
);
