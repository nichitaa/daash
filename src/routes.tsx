import type { RoutesConfig } from '@nichitaa/auth-react-router';
import { lazy } from 'react';
import { MainAppLayout } from './components';
import { Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found.tsx';

const StatusPage = lazy(() => import('./pages/status-page.tsx'));

export const routes: RoutesConfig = {
  common: [
    {
      path: '/',
      element: <MainAppLayout />,
      routes: [
        {
          index: true,
          element: <Navigate to={'dassh'} />,
        },
        {
          path: 'dassh',
          element: <StatusPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
};
