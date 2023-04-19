import React, { lazy, Suspense } from 'react';
import { RouteType } from './config';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Popover, Skeleton } from '@mui/material';

const HomePage = lazy(() => import('../pages/dashboard/home/HomePage'));
const Problems = lazy(() => import('../pages/Problems'));
const SubjectIndex = lazy(() => import('../pages/dashboard/SubjectIndex'));

const appRoutes: RouteType[] = [
  {
    index: true,
    element: (
      <Suspense fallback={<Popover open={false}>Loading...</Popover>}>
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
    path: '/problems',
    element: (
      <Suspense fallback={<Skeleton animation="pulse" variant="rounded" />}>
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
      <Suspense fallback={<Skeleton animation="wave" variant="rectangular" sx={{ height: 190 }} />}>
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
