import React from 'react';
import styles from './NumberField.module.css';

const NumberField = ({ value, label, min, max, name, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        min={min}
        max={max}
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberField;
