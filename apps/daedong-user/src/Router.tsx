import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { JobMainBoard, MainPage } from './pages';
import { ErrorPage } from '@daedongyeojido-fe-v3.5/ui';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/job-mainBoard',
        element: <JobMainBoard />,
      },
    ],
  },
  {
    path: '*', // 404 페에지
    element: <ErrorPage />,
  },
]);
