import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home.tsx';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <h1>404</h1>,
    },
  ]);
  return routes;
}
