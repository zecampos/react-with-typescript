import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

// Importações dos layouts e store
import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

const store = {
  getState() {
    return {
      auth: {
        signed: true,
      },
    };
  },
};

interface RouteProps extends RouteComponentProps {
  isPrivate?: boolean;
  component: React.FC;
}

const RouteWrapper: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
