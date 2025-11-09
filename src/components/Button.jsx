import React from 'react';
import styles from "./Button.module.css";
import { useNavigate } from 'react-router-dom';

function Button({ text, size, variant, route }) {
  
    const navigate = useNavigate();
    const handleClick = () => navigate(route);
    
    const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]}`;
    
    return (
            <button className={buttonClass} onClick={handleClick}>
                {text}
            </button>
  )
}

export default Button