import styles from "./css/Card.module.css";

function Card({ item }) {
  return (
    <div className={styles.container}>
      <img src={item?.image} />
      <div className={styles.content}>
        <h4>{item ? item.name : "Name"}</h4>
      </div>
    </div>
  );
}

export default Card;
