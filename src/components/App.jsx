import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';

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
      <ContactForm />
      <h2 className={s.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
