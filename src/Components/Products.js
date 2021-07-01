import styles from "./css/Products.module.css";
import ProductMedia from "./ProductMedia";
function Products({ products }) {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.products}>
          {products.map((item, index) => (
            <div className={styles.productItem} tabindex="0" id={index}>
              <div className={styles.image}>
                <ProductMedia images={item.image} />
              </div>
              <div className={styles.details}>
                <span style={{ textAlign: "center" }}>{item.name}</span>
                <span style={{ textAlign: "center" }}>{item.category}</span>
                <span style={{ textAlign: "center" }}>{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
