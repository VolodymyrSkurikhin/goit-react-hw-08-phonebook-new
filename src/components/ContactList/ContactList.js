import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({ visibleContacts, deleteHandle }) => (
  <ul className={s.contactList}>
    {visibleContacts.map(item => (
      <li className={s.contactListItem} key={item.id}>
        {item.name}: {item.number}
        <button
          type="button"
          className={s.deleteBtn}
          onClick={() => deleteHandle(item.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  deleteHandle: PropTypes.func,
};
