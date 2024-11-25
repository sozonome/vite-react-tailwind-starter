import React from 'react';
import type { PathRouteProps } from 'react-router';

const Home = React.lazy(() => import('@/lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
