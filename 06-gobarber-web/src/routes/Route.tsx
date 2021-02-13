import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivade?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivade = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <>
      <ReactDomRoute
        {...rest}
        render={({ location }) => {
          return isPrivade === !!user ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: isPrivade ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default Route;
