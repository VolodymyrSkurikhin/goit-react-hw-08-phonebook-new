import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch, deleteThunk } from '../../Redux/thunk';
import { getContactItems, getFilter } from '../../Redux/selectors';
import { renderContactList } from '../helpers';
import { Loader } from 'components/Loader/loader';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContactItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  const onDelete = id => dispatch(deleteThunk(id));
  const visibleContacts = renderContactList(filter, contacts);
  return (
    <div>
      <Loader />
      <ul className={s.contactList}>
        {visibleContacts.map(item => (
          <li className={s.contactListItem} key={item.id}>
            &#9743;&#160;
            {item.name}: {item.number}
            {/* <span className={s.dateInfo}>
              Created:&#160;
              {new Date(item.createdAt).toLocaleString()}
            </span> */}
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
    </div>
  );
};
// ContactList.propTypes = {
//   visibleContacts: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired })
//   ),
//   deleteHandle: PropTypes.func,
// };
