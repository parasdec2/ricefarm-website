import { useEffect, useState } from "react";
import styles from "./css/Catalog.module.css";
import { MobileNav, Products, ContactUs } from "../Components/index";

function Catalog() {
  const [selected, setSelected] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const products = [
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8777.JPG?alt=media&token=b540b76d-c564-454a-bc56-0dfe42a1b89e",
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8784.JPG?alt=media&token=bcba195a-fd13-4137-91e0-a7400bb95173",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8791.JPG?alt=media&token=c99d936b-5f80-46fb-84e2-4f57586d7b92",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8777.JPG?alt=media&token=b540b76d-c564-454a-bc56-0dfe42a1b89e",
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8784.JPG?alt=media&token=bcba195a-fd13-4137-91e0-a7400bb95173",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8791.JPG?alt=media&token=c99d936b-5f80-46fb-84e2-4f57586d7b92",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8777.JPG?alt=media&token=b540b76d-c564-454a-bc56-0dfe42a1b89e",
    },
    {
      name: "Ekam 1121 Sella Basmati Rice",
      category: "Sella",
      type: "xxl",
      quantity: "10 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8784.JPG?alt=media&token=bcba195a-fd13-4137-91e0-a7400bb95173",
    },
    {
      name: "Punjab 1121 Steam Basmati Rice",
      category: "Steam",
      type: "xxl",
      quantity: "39 Kg",
      image:
        "https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/products%2FIMG_8791.JPG?alt=media&token=c99d936b-5f80-46fb-84e2-4f57586d7b92",
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
      <MobileNav menu={setNavOpen} />
      <div className={styles.content}>
        <div
          className={styles.left}
          style={navOpen ? { marginTop: "300px" } : {}}
        >
          <h1 className={styles.title}>Products</h1>
          <h3>Varieties</h3>
          <div>
            {varieties.map((variety, index) => (
              <ul onClick={() => updateSelected(variety)}>{variety}</ul>
            ))}
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
      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
}

export default Catalog;
