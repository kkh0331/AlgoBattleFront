import React from 'react'
import TotalLayout from '../components/TotalLayout'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../routes/main/page';
import RoomPage from '../routes/room/page';

export const mainRouter = [
  {
    path: "/",
    element: <TotalLayout/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
        index : true,
      },
      {
        path: "/room",
        element: <RoomPage/>,
        index : true,
      },
    ]
  },
];

const router = createBrowserRouter(mainRouter);

export default router;