import React from 'react';
import './componenteEntradaTexto.css';

function TextInput(props) {
  const { inputValue, inputType, inputClassname, placeholder, disabled, handleOnChange } = props;

  return (
    <input
      className={inputClassname}
      type={inputType}
      value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleOnChange}
    />
  );
}

export default TextInput;