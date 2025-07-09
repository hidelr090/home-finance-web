// src/routes/index.tsx
import type { RouteObject } from "react-router-dom";

import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";

import ProtectedRoute from "@routes/ProtectedRoute";
import AppLayout from "@layouts/AppLayout";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />, 
    children: [
      {
        element: <AppLayout />, 
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
