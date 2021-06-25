import styles from "./css/Catalog.module.css";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import Product from "../Components/Product";
import Products from "../Components/Products";
import punjab1 from "../punjab1.jpg";
import punjab2 from "../punjab2.jpg";
import ekam from "../ekam.jpg";

function Catalog() {
  const [selected, setSelected] = useState("");
  const products = [
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab1,
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image: ekam,
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab2,
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab1,
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image: ekam,
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab2,
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab1,
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image: ekam,
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image: punjab2,
    },
  ];

  const [varieties, setVarieties] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filter = (category) => {
    var filteredProduct = products.filter((e) => e.category === category);
    console.log(filteredProduct);
    setFilteredProducts(filteredProduct);
  };

  useEffect(() => {
    const variety = [];
    variety.push("Steam");
    variety.push("Sella");
    setVarieties(variety);
    setSelected(variety[0]);
    var filteredProduct = products.filter((e) => e.category === variety[0]);
    console.log(filteredProduct);
    setFilteredProducts(filteredProduct);
  }, []);

  const updateSelected = (category) => {
    setSelected(category);
    filter(category);
  };
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>Products</h1>
            <h3>Varieties</h3>
            <div>
              {varieties.map((variety, index) => (
                <ul onClick={() => updateSelected(variety)}>{variety}</ul>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>Catalog Page</h1>
            {/* <div className={styles.products}>
              {filteredProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div> */}
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
