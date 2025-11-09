import React from 'react';
import styles from "./Button.module.css";
import { useNavigate } from 'react-router-dom';

function Button({ text, variant, route }) {
  
    const navigate = useNavigate();
    const handleClick = () => navigate(route);
    
    const buttonClass = `${styles.button} ${styles[variant]}`;
    
    return (
            <button className={buttonClass} onClick={handleClick}>
                {text}
            </button>
  )
}

export default Button