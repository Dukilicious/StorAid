import styles from "./StarRating.module.css";

function StarRating({ rating }) {

  const stars = Array.from({ length: rating });

  return (
    <div className={styles.starContainer}>
      {stars.map((_, index) => (
        <img key={index} src="/star-icon.svg" className={styles.star} alt="Star" />
      ))}
    </div>
  );
}

export default StarRating;