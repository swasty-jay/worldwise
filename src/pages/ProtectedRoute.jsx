import { useEffect } from "react";
import { UseAuth } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = UseAuth();
  const Navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) Navigate("/");
    },
    [isAuthenticated, Navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
