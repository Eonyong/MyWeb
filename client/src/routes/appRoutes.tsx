import React from 'react';
import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout';
import HomePage from '../pages/dashboard/home/HomePage';
import { RouteType } from './config';
import Problems from '../pages/Problems';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/problems',
    element: <Problems />,
    state: 'problems',
    sidebarProps: {
      displayText: 'Problems',
    },
    child: [
      {
        path: '/problems/:problemId',
        element: <DashboardPageLayout />,
        state: 'problem',
        sidebarProps: {
          displayText: 'default',
        },
      },
    ],
  },
];

export default appRoutes;
