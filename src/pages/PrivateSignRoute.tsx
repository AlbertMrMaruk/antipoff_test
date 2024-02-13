import { ReactNode } from "react";
import { verifyToken } from "../utils/verifyToken";
import { Navigate } from "react-router-dom";

type PrivateSignRouteType = {
  children: ReactNode;
};

const PrivateSignRoute = ({ children }: PrivateSignRouteType) => {
  if (verifyToken()) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateSignRoute;
