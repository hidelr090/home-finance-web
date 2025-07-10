// src/routes/index.tsx
import type { RouteObject } from "react-router-dom";

import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";

import ProtectedRoute from "@routes/ProtectedRoute";
import AppLayout from "@layouts/AppLayout";
import MyTables from "@pages/MyTables";
import EntryForm from "@pages/EntryForm";

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
          {
            path: "/my-tables",
            element: <MyTables />
          },
          {
            path: "/entry-form",
            element: <EntryForm />
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
