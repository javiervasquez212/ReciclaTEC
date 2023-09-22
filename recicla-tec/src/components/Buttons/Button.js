import React from 'react';
import './IconButton.style.css';

function IconButton(props) {
  const { buttonText, buttonClassname, icon, disabled, handleOnClick } = props;
  const altText= `foto de ${props.icon}`
  return (
    <button
      className={`contenedor-botones ${buttonClassname}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={altText} />}
      {buttonText}
    </button>
  );
}

export default IconButton;
