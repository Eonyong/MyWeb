import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
// import HomePage from '../pages/dashboard/home/HomePage';
// import Problems from '../pages/Problems';
// import SubjectLayout from '../components/layout/SubjectGrid';
// import MainLayout from '../components/layout/MainLayout';
import { RouteType } from './config';
import PageWrapper from '../components/layout/PageWrapper';
import appRoutes from './appRoutes';

const generateRoutes = (routes: RouteType[]): ReactNode => {
  return routes.map((route: RouteType, index: number) => {
    return route.index ? (
      <Route index path={route.path} element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}></Route>
    ) : (
      <Route
        path={route.path}
        element={<PageWrapper state={route.state ?? undefined}>{route.element}</PageWrapper>}
        key={index}
      >
        {route.child && generateRoutes(route.child)}
      </Route>
    );
  });
};

export const routes: ReactNode = generateRoutes(appRoutes);
