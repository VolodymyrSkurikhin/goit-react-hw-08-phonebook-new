import React from 'react';
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
