import styles from "./css/Card.module.css";

function Card({ item }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${item?.image})`,
      }}
    >
      <div className={styles.content}>
        <h3>{item ? item.name : "Name"}</h3>
      </div>
    </div>
  );
}

export default Card;
