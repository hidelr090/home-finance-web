import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = true //Boolean(localStorage.getItem("token"));

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
