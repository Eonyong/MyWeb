import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
