import styles from "./css/Product.module.css";

function Product({ item, key }) {
  return (
    <div id={key} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={item.image} height="300px" width="300px" />
        </div>
        <div className={styles.details}>
          <p>
            {item.category}, {item.name}, {item.type}, {item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
