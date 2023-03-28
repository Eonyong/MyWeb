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
        element={
          <PageWrapper state={route.state ?? undefined} key={index}>
            {route.child && generateRoutes(route.child)}
          </PageWrapper>
        }
      ></Route>
    );
  });
};

export const routes: ReactNode = generateRoutes(appRoutes);

// export default function Router() {
//   const routes = useRoutes([
//     {
//       path: '/',
//       element: <MainLayout />,
//       children: [
//         { index: true, element: <HomePage /> },
//         // { path: 'problems', element: <SubjectLayout /> },
//         // { path: 'problems/:subject', element: <Problems /> },
//       ],
//     },
//     {
//       path: '*',
//       element: <h1>404</h1>,
//     },
//   ]);
//   return routes;
// }
