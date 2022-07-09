import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// import { deleteContact } from '../Redux/action';
import s from './App.module.css';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     return parsedContacts;
  //   }
  //   return [];
  // });

  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);
  // const dispatch = useDispatch();
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAppSubmit = data => {
  //   contacts.find(cont => cont.name === data.name)
  //     ? alert(`${data.name} is already in contacts`)
  //     : //     : setContacts(prevState => [
  //       //         ...prevState,
  //       //         { id: nanoid(5), name: data.name, number: data.number },
  //       //       ]);
  //       // };
  //       dispatch(addContact(data.name, data.number));
  // };
  // const handleFilter = e => setFilter(e.currentTarget.value);
  // const handleFilter = e => dispatch(changeFilter(e.currentTarget.value));
  // function renderContactList() {
  //   const filterLowered = filter.toLowerCase();
  //   if (contacts) {
  //     return contacts.filter(cont =>
  //       cont.name.toLowerCase().includes(filterLowered)
  //     );
  //   }
  //   return;
  // }
  // const onDelete = id => {
  //   setContacts(prevState => prevState.filter(item => item.id !== id));
  // };
  // const onDelete = id => dispatch(deleteContact(id));

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
      <ContactList
      // visibleContacts={renderContactList()}
      // deleteHandle={onDelete}
      />
    </div>
  );
}

export default App;
