import React from "react";
import styles from "./TestimonialBox.module.css";
import StarRating from "./StarRating";

function TestimonialBox({ item }) {
  return (
    <div className={styles.wrapper}>
        <StarRating rating={item.rating} />
        <p className={styles.comment}>{item.comment}</p>

        <div className={styles.clientContainer}>
            <img className={styles.avatar} src={item.avatarUrl} alt={item.name} />
            <div className={styles.info}>
                <h6 className={styles.name}>{item.name}</h6>
                <p className={styles.company}>{item.companyName}</p>
            </div>
        </div>
        <img className={styles.image} src="/quotation-icon.svg" alt="Quotation image" />
    </div>
  );
}

export default TestimonialBox;