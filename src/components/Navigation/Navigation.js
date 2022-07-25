import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        end
        to="/register"
        className={({ isActive }) => (isActive ? s.active : s.notActive)}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.active : s.notActive)}
      >
        Login
      </NavLink>
    </nav>
  );
}
