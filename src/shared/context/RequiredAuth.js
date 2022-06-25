import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./auth-context";

function RequiredAuth() {
  const context = useContext(AuthContext);
  const location = useLocation();

  return context.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default RequiredAuth;
