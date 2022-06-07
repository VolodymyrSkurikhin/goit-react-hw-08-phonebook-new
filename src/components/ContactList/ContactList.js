import React from 'react';
import s from './ContactList.module.css';

export const ContactList = ({ visibleContacts }) => (
  <ul className={s.contactList}>
    {visibleContacts.map(item => (
      <li className={s.contactListItem} key={item.id}>
        {item.name}: {item.number}
      </li>
    ))}
  </ul>
);
