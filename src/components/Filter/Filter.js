import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../Redux/action';
// import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <label htmlFor="inpfilter" className={s.filterText}>
      Find contacts by name
      <input
        type="text"
        className={s.filterInput}
        id="inpfilter"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   handleFilter: PropTypes.func,
// };
