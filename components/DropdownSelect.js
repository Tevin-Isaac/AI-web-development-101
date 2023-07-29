// file: /components/DropdownSelect.js
import React from 'react';

const DropdownSelect = ({ value, onChange, options, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="dropdown-select"
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
