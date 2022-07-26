import React from 'react';
import { TextField, Button } from '@mui/material';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'Redux/thunk';

export function UserMenu() {
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout);
  return (
    <div className={s.container}>
      <TextField
        value={email}
        // onChange={e => setEmail(e.currentTarget.value)}
        className={s.input}
        // required
        // error
        id="outlined-email"
        label="Email"
        type="email"
        name="email"
        // autoComplete="current-email"
        // helperText="Incorrect value"
      />
      <Button
        type="button"
        className={s.button}
        variant="contained"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
