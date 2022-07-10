import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'flexStart',
        fontSize: 40,
        color: '#010101',
        padding: '20px',
      }}
    >
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
