import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export default function PublicRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  <Route {...routeProps}>
    {isLoggedIn ? <Navigate to={{ ...routeProps }} /> : children}
  </Route>;
}
