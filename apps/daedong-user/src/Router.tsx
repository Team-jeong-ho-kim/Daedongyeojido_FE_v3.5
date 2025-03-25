import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { ErrorPage } from '@daedongyeojido-fe-v3.5/ui';
import { JobMainBoard, MainPage , CreatePost } from './pages';

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
      {
        path: '/createPost',
        element: <CreatePost />,
      },
    ],
  },
  {
    path: '*', // 404 페에지
    element: <ErrorPage />,
  },
]);
