// src/routes/index.tsx
import type { RouteObject } from "react-router-dom";

import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Home from "@pages/Home";

import ProtectedRoute from "@routes/ProtectedRoute";
import AppLayout from "@layouts/AppLayout";
import MyTables from "@pages/MyTables";
import EntryForm from "@pages/EntryForm";
import PublicLayout from "@layouts/PublicLayout";
import Signup from "@pages/Signup";
import CreateTable from "@pages/CreateTable";

export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ],
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
            element: <MyTables />,
          },
          {
            path: "/entry-form",
            element: <EntryForm />,
          },
          {
            path: "/create-table",
            element: <CreateTable />
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
