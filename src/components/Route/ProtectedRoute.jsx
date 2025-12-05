import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); 

  if (!token) {
    return <Navigate to="/signIn" replace />;
  }

  if (role && userRole !== role) {
    // Unauthorized
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
