import type { RouteObject } from "react-router-dom";

import NotFound from "@pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: '*',
    element: <NotFound />
  }
];