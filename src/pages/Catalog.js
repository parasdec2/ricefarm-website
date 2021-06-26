import { useEffect, useState, useRef } from "react";
import styles from "./css/Catalog.module.css";
import { MobileNav, Products, ContactUs } from "../Components/index";

function Catalog() {
  const [selected, setSelected] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const myRef = useRef(null);

  const products = [
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2Fpunjab1.png?alt=media&token=473669e2-c86f-48e0-94bd-44f9e3c9eade",
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2Fekam.png?alt=media&token=00fa9677-af0e-4f75-bc3a-d07c039bf830",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2Fpunjab2.png?alt=media&token=0419de31-62e6-474f-9062-669a58376379",
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
    <div className={styles.container}>
      <MobileNav menu={setNavOpen} contact={myRef} />
      <div className={styles.content}>
        <div
          className={styles.left}
          style={navOpen ? { marginTop: "300px" } : {}}
        >
          <h1 className={styles.title}>Products</h1>
          <div className={styles.varieties}>
            <h3>Varieties</h3>
            <div className={styles.variety}>
              {varieties.map((variety, index) => (
                <p
                  id={index}
                  className={styles.varietyName}
                  style={
                    selected.toLowerCase() === variety.toLowerCase()
                      ? {
                          backgroundColor: "lightgreen",
                          borderRadius: "20px",
                        }
                      : {}
                  }
                  onClick={() => updateSelected(variety)}
                >
                  <span>{variety}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className={styles.right}
          style={navOpen ? { marginTop: "300px" } : {}}
        >
          <h1 className={styles.title}>Catalog Page</h1>
          <Products products={filteredProducts} />
        </div>
      </div>
      <div ref={myRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default Catalog;
