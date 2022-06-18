import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';

function App() {
  // state = {
  //   contacts: [
  //     { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: '2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: '3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: '4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      return parsedContacts;
    }
  });
  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAppSubmit = data => {
    contacts.find(cont => cont.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(5), name: data.name, number: data.number },
        ]);
  };
  const handleFilter = e => setFilter(e.currentTarget.value);
  function renderContactList() {
    const filterLowered = filter.toLowerCase();
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filterLowered)
    );
  }
  const onDelete = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

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
      <ContactForm onSubmit={handleAppSubmit} />
      <h2 className={s.contactTitle}>Contacts</h2>
      <Filter value={filter} handleFilter={handleFilter} />
      <ContactList
        visibleContacts={renderContactList()}
        deleteHandle={onDelete}
      />
    </div>
  );
}

export default App;
