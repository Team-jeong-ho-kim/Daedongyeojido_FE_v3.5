import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
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
]);
