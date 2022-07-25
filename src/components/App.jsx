import { React, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
// import { ContactsView } from 'Pages/ContactsView/ContactsView';
// import ContactForm from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';
import { Register } from 'Pages/Register/Register';
// import { lazy, Suspense } from 'react';

const ContactsView = lazy(() => import('Pages/ContactsView/ContactsView'));

function App() {
  const errorMessage = useSelector(state => state.contacts.error);
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
      <Navigation />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<ContactsView />} />
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
