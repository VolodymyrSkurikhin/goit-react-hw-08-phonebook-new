import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      name: '',
      number: '',
      contacts: [
        ...prevState.contacts,
        { id: nanoid(5), name: prevState.name, number: prevState.number },
      ],
    }));
  };
  handleFilter = e => this.setState({ filter: e.currentTarget.value });

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
        <div className={s.maincontainer}>
          <form className={s.mainform} onSubmit={this.handleSubmit}>
            <label htmlFor="inpname" className={s.mainlabel}>
              Name{' '}
            </label>
            <input
              id="inpname"
              className={s.mainInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInput}
            />
            <label htmlFor="inptel" className={s.mainlabel}>
              Number{' '}
            </label>
            <input
              id="inptel"
              className={s.mainInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInput}
            />
            <button type="submit" className={s.submitBtn}>
              Add contact
            </button>
          </form>
          <h2 className={s.contactTitle}>Contacts</h2>
          <label htmlFor="inpfilter" className={s.filterText}>
            Find contacts by name
          </label>
          <input
            type="text"
            className={s.mainInput}
            id="inpfilter"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
          />
          <ul className={s.contactList}>
            {this.state.contacts.map(item => (
              <li className={s.contactListItem} key={item.id}>
                {item.name}: {item.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
