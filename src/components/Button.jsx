import React from 'react';
import styles from "./Button.module.css";
import { Link } from "react-router-dom"

function Button({ text, size = "bookNow", variant = "green" }) {
  
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]}`;

    return (
        <Link to="/">
            <button className={buttonClass}>
                {text}
            </button>
        </Link>
  )
}

export default Button