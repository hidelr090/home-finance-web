import { useRoutes } from "react-router-dom"

import { routes } from "@routes/index";
import { useApiInterceptor } from "@hooks/useApiInterceptor";

function App() {
  const element = useRoutes(routes);
  useApiInterceptor();

  return element;
}

export default App
