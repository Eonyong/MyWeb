import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteType } from './config';
import PageWrapper from '../components/layout/PageWrapper';
import appRoutes from './appRoutes';

const generateRoutes = (routes: RouteType[]) => {
  return routes.map((route: RouteType, index) => {
    return route.index ? (
      <Route index path={route.path} element={<PageWrapper state={route.state}>{route.element}</PageWrapper>} />
    ) : (
      <Route
        path={route.path}
        element={<PageWrapper state={route.state ?? undefined}>{route.element}</PageWrapper>}
        key={index}
      >
        {route.children && generateRoutes(route.children)}
      </Route>
    );
  });
};

export const routes = generateRoutes(appRoutes);
