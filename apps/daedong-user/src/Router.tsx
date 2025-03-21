import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { MainPage } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
