import React from 'react';
import HomePage from '../pages/dashboard/home/HomePage';
import { RouteType } from './config';
import Problems from '../pages/Problems';
import SubjectIndex from '../pages/dashboard/SubjectIndex';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
    sidebarProps: {
      displayText: 'Home',
      icon: <HomeIcon />,
    },
  },
  {
    // 위 /problems 링크의 화면
    index: true,
    path: '/problems',
    element: <SubjectIndex />,
    state: 'problems',
    sidebarProps: {
      displayText: 'problems',
      icon: <LibraryBooksIcon />,
    },
    child: [
      // /problems/과목 링크의 화면
      {
        path: '/problems/:subject',
        element: <Problems />,
        state: 'problems.subject',
        sidebarProps: {
          displayText: 'Subject',
        },
      },
    ],
  },
];

export default appRoutes;
