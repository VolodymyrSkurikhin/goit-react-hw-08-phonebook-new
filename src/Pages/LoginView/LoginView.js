import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Loader } from 'components/Loader/loader';
import { login } from 'Redux/thunk';
import s from '../RegisterView/RegisterView.module.css';
// import { Button } from '@mui/material';

function LoginView() {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.maincontainer}>
      <Loader />
      {/* // <div className={s.container}> */}
      <form className={s.mainform} onSubmit={handleSubmit}>
        {/* <TextField
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          className={s.input}
          required
          // error
          id="outlined-name"
          label="Name"
          type="name"
          name="name"
          autoComplete="current-name"
          // helperText="Incorrect value"
        /> */}
        <TextField
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          className={s.input}
          required
          // error
          id="outlined-email"
          label="Email"
          type="email"
          name="email"
          autoComplete="current-email"
          // helperText="Incorrect value"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          className={s.input}
          required
          // error
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          // helperText="Incorrect value"
        />
        <Button type="submit" className={s.button} variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LoginView;
