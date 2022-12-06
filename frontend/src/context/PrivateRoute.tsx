import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import { GlobalContext } from "./Global";

import { Loading } from "../components";

interface IPrivateRoute {
  children: JSX.Element;
}

function PrivateRoute({ children }: IPrivateRoute): JSX.Element {
  const {
    login: { isSignedIn },
    loading: { loading },
  } = useContext(GlobalContext);

  function validar(): JSX.Element {
    console.log("IsSignedIn: ", isSignedIn);
    if (!isSignedIn) return <Navigate to="/login" />;
    return children as JSX.Element;
  }

  return loading ? <Loading /> : validar();
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
