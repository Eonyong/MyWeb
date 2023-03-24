import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Problems from './pages/Problems';
import SubjectLayout from './layouts/main/grid/SubjectGrid';
import MainDefaults from './layouts/main';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { index: true, element: <MainDefaults /> },
        { path: 'problems', element: <SubjectLayout /> },
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
