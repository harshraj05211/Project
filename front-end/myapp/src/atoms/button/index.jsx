import React from 'react'
import style from './button.module.scss';

function Button(props) {
    const {text, handleClick, className} = props;
  return (
    <button className={style.saveBtn} onClick={handleClick}>
        <h3>{text}</h3>
    </button>
  )
}

export default Button
