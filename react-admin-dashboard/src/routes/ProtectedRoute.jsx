import React from "react";
import { Navigate } from "react-router-dom";
import { getLoggedInUser } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  const user = getLoggedInUser();
  return user ? children : <Navigate to="/login" replace />;
}
