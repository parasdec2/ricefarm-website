import { useEffect, useState, useRef } from "react";
import styles from "./css/Catalog.module.css";
import { MobileNav, Products, ContactUs } from "../Components/index";

function Catalog() {
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

  return (
    <div className={styles.container}>
      <MobileNav menu={setNavOpen} contact={myRef} />
      <div className={styles.content}>
        <div
          className={styles.distribution}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          <h1 className={styles.title}>Distributions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
        </div>
        <br />
        <hr />

        <div className={styles.products}>
          <h1 className={styles.title}>Our Products</h1>
          <Products products={products} />
        </div>
        <br />
        <hr />
        <div className={styles.brandings}>
          <h1 className={styles.title}>Our Brands</h1>
          <h3>Brand 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
          <h3>Brand 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
          <h3>Brand 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
        </div>
      </div>
      <div ref={myRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default Catalog;
