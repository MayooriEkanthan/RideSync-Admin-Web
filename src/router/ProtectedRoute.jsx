import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  // Example authentication check
  const isAuthenticated = true; // change later with Firebase/Auth

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;