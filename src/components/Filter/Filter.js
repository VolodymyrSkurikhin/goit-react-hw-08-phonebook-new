import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, handleFilter }) => (
  <label htmlFor="inpfilter" className={s.filterText}>
    Find contacts by name
    <input
      type="text"
      className={s.filterInput}
      id="inpfilter"
      name="filter"
      value={value}
      onChange={handleFilter}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
