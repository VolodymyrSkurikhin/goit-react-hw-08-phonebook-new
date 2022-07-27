import { React, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ContactsView from 'Pages/ContactsView/ContactsView';
// import ContactForm from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';
import { useEffect } from 'react';
import RegisterView from 'Pages/RegisterView/RegisterView';
import LoginView from 'Pages/LoginView/LoginView';
import { UserMenu } from './UserMenu/UserMenu';
// import { lazy, Suspense } from 'react';
import { getCurrentUserThunk } from 'Redux/thunk';

// const ContactsView = lazy(() => import('Pages/ContactsView/ContactsView.js'));
// const Navigation = lazy(() => import('./Navigation/Navigation'));
// const RegisterView = lazy(() => import('Pages/RegisterView/RegisterView.js'));
// const LoginView = lazy(() => import('Pages/LoginView/LoginView.js'));
// const UserMenu = lazy(() => import('./UserMenu/UserMenu'));

function App() {
  const errorMessage = useSelector(state => state.contacts.error);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);
  return (
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
      }}
    >
      {errorMessage && <h1 className={s.title}>{errorMessage}</h1>}
      <h1 className={s.title}>Phonebook</h1>
      {!isLoggedIn ? <Navigation /> : <UserMenu />}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          {/* <Route path="/register">
            {isLoggedIn ? <Navigate to="/contacts" /> : <RegisterView />}
          </Route>
          <Route path="/login">
            {isLoggedIn ? <Navigate to="/contacts" /> : <LoginView />}
          </Route> */}
          <PublicRoute path="/register" element={<RegisterView />} />
          {/* ></PublicRoute> */}
          <PublicRoute path="/login" element={<LoginView />} />
          {/* </PublicRoute> */}
          {/* <Route path="/contacts">
            {isLoggedIn ? <ContactsView /> : <Navigate to="/login" />}
          </Route> */}
          <PrivateRoute path="/login" element={<ContactsView />} />
          {/* <ContactsView />
          </PrivateRoute> */}
        </Routes>
      </Suspense>
      {/* <ContactForm />
      <h2 className={s.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </div>
  );
}

export default App;
