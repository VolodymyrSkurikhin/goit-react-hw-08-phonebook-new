import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAppSubmit = data => {
    this.state.contacts.find(cont => cont.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(5), name: data.name, number: data.number },
          ],
        }));
  };
  handleFilter = e => this.setState({ filter: e.currentTarget.value });
  renderContactList() {
    const filterLowered = this.state.filter.toLowerCase();
    return this.state.contacts.filter(cont =>
      cont.name.toLowerCase().includes(filterLowered)
    );
  }

  render() {
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
        <ContactForm onSubmit={this.handleAppSubmit} />
        <h2 className={s.contactTitle}>Contacts</h2>
        <Filter value={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList visibleContacts={this.renderContactList()} />
      </div>
    );
  }
}

export default App;
