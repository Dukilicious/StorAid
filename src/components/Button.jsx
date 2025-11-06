import React from 'react';
import styles from "./Button.module.css";

function Button({ text, size = "medium", variant = "green" }) {
  
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

    return (
        <button className={buttonClass}>
            {text}
        </button>
  )
}

export default Button