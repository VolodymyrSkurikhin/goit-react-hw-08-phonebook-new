import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  <Route {...routeProps}>
    {isLoggedIn ? children : <Navigate to={{ ...routeProps }} />}
  </Route>;
}
