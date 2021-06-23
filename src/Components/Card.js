import styles from "./css/Card.module.css";

function Card({ name, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{name ? name : "Name"}</h3>
      </div>
    </div>
  );
}

export default Card;
