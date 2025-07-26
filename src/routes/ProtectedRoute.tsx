import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = Boolean(sessionStorage.getItem("token"));

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
