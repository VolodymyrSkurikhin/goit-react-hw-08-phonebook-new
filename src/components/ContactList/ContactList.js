import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/action';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  function renderContactList() {
    const filterLowered = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(cont =>
        cont.name.toLowerCase().includes(filterLowered)
      );
    }
    return;
  }
  const visibleContacts = renderContactList();
  return (
    <ul className={s.contactList}>
      {visibleContacts.map(item => (
        <li className={s.contactListItem} key={item.id}>
          {item.name}: {item.number}
          <button
            type="button"
            className={s.deleteBtn}
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  deleteHandle: PropTypes.func,
};
