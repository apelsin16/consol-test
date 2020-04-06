import React from 'react';
import styles from './textarea.module.css';

const TextArea = ({ name, text, onHandleChange, width }) => {

  const handleChange = e => {
    onHandleChange(e);
  }

  return (
      <textarea className={styles.textarea} style={{ minWidth: `${width}%` }} name={name} value={text} onChange={handleChange}/>
  )
};

export default TextArea;
