import { useHistory } from "react-router-dom";
import styles from "./css/Card.module.css";

function Card({ item }) {
  const history = useHistory();
  return (
    <div
      className={styles.container}
      onClick={() => history.push("/catalogue")}
      style={{ cursor: "pointer" }}
    >
      <img src={item?.image} />
      <div className={styles.content}>
        <h4>{item ? item.name : "Name"}</h4>
      </div>
    </div>
  );
}

export default Card;
