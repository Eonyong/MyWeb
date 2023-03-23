import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Problems from './pages/Problems.tsx';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { index: true, element: <Home /> },
        { path: 'problems/:subject', element: <Problems /> },
      ],
    },
    {
      path: '*',
      element: <h1>404</h1>,
    },
  ]);
  return routes;
}
