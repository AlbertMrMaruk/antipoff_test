import { ReactNode } from "react";
import { verifyToken } from "../utils/verifyToken";
import { Navigate } from "react-router-dom";

type PrivateRouteType = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteType) => {
  if (verifyToken()) {
    return <>{children}</>;
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export default PrivateRoute;
