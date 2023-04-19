import React, { lazy, Suspense } from 'react';
import { RouteType } from './config';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const HomePage = lazy(() => import('../pages/dashboard/home/HomePage'));
const Problems = lazy(() => import('../pages/Problems'));
const SubjectIndex = lazy(() => import('../pages/dashboard/SubjectIndex'));

const appRoutes: RouteType[] = [
  {
    index: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
    state: 'home',
    sidebarProps: {
      displayText: 'Home',
      icon: <HomeIcon />,
    },
  },
  {
    index: true,
    path: '/problems',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SubjectIndex />
      </Suspense>
    ),
    state: 'problems',
    sidebarProps: {
      displayText: 'problems',
      icon: <LibraryBooksIcon />,
    },
  },
  {
    path: '/problems/:subject',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Problems />
      </Suspense>
    ),
    state: 'problems.subject',
    sidebarProps: {
      displayText: 'Subject',
    },
  },
];

export default appRoutes;
