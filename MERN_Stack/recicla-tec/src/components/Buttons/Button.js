import React from 'react';
import './IconButton.style.css';

function IconButton(props) {
  const { buttonText, buttonClassname, icon, disabled, handleOnClick } = props;

  return (
    <button
      className={`contenedor-botones ${buttonClassname}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {buttonText}
    </button>
  );
}

export default IconButton;
