import { React, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { getCurrentUserThunk } from 'Redux/thunk';
import {
  errorSelector,
  isLoggedInSelector,
  isReloadingSelector,
} from 'Redux/selectors';
import { Navigation } from './Navigation/Navigation';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './App.module.css';

const ContactsView = lazy(() => import('Pages/ContactsView/ContactsView.js'));
const RegisterView = lazy(() => import('Pages/RegisterView/RegisterView.js'));
const LoginView = lazy(() => import('Pages/LoginView/LoginView.js'));

function App() {
  const errorMessage = useSelector(errorSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isReloading = useSelector(isReloadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);
  return (
    !isReloading && (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'flexStart',
          alignItems: 'flexStart',
          fontSize: 40,
          color: '#010101',
          padding: '20px',
          backgroundImage: `url(${process.env.PUBLIC_URL}/bgr.webp)`,
          backgroundSize: 'contain',
        }}
      >
        {errorMessage && <h1 className={s.title}>{errorMessage}</h1>}
        <h1 className={s.title}>Phonebook</h1>
        {!isLoggedIn ? <Navigation /> : <UserMenu />}
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route
              path="/register"
              element={
                isLoggedIn ? <Navigate to="/contacts" /> : <RegisterView />
              }
            />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/contacts" /> : <LoginView />}
            />
            <Route
              path="/contacts"
              element={isLoggedIn ? <ContactsView /> : <Navigate to="/login" />}
            />
          </Routes>
        </Suspense>
      </div>
    )
  );
}

export default App;
