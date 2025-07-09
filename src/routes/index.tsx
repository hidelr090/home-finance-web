import type { RouteObject } from "react-router-dom";

import NotFound from "@pages/NotFound";
import Login from "@pages/Login";

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
];