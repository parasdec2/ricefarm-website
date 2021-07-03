import { useState, useRef } from "react";
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

  window.addEventListener("scroll", () => {
    function animate() {
      var content;
      var heading;
      var product;
      var windowHeight;

      function init() {
        content = document.querySelectorAll(".hiddenC");
        heading = document.querySelectorAll(".hiddenH");
        product = document.querySelectorAll(".hiddenP");
        windowHeight = window.innerHeight;
      }

      function checkElemets() {
        if (content.length < 1 && heading.length < 1 && product.length < 1) {
          window.removeEventListener("scroll", checkPosition);
          window.removeEventListener("scroll", checkElemets);
        }
      }

      function checkPosition() {
        for (var i = 0; i < heading.length; i++) {
          var elementH = heading[i];
          var positionFromTopH = heading[i].getBoundingClientRect().top;
          if (
            positionFromTopH - windowHeight <= -windowHeight * 0.3 &&
            positionFromTopH !== 0
          ) {
            elementH.classList.remove("hiddenH");
            elementH.classList.add("animate__animated");
            elementH.classList.add("animate__slideInLeft");
          }
        }
        for (var j = 0; j < content.length; j++) {
          var elementC = content[j];
          var positionFromTopC = content[j].getBoundingClientRect().top;
          if (
            positionFromTopC - windowHeight <= -windowHeight * 0.3 &&
            positionFromTopC !== 0
          ) {
            elementC.classList.remove("hiddenC");
            elementC.classList.add("animate__animated");
            elementC.classList.add("animate__slideInRight");
          }
        }
        for (var k = 0; k < product.length; k++) {
          var elementP = product[k];
          var positionFromTopP = product[k].getBoundingClientRect().top;
          if (
            positionFromTopP - windowHeight <= -windowHeight * 0.3 &&
            positionFromTopP !== 0
          ) {
            elementP.classList.remove("hiddenP");
            elementP.classList.add("animate__animated");
            elementP.classList.add("animate__bounceInUp");
          }
        }
      }

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("scroll", checkElemets);
      window.addEventListener("resize", init);

      init();
      checkElemets();
      checkPosition();
    }
    animate();
  });

  return (
    <div className={styles.container}>
      <MobileNav menu={setNavOpen} contact={myRef} />
      <div className={styles.content}>
        <div
          className={styles.distribution}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          <h1 className="animate__animated animate__fadeIn">Distributions</h1>
          <p className="animate__animated animate__fadeIn">
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
          <h1 className="hiddenH">Our Products</h1>
          <Products products={products} />
        </div>
        <br />
        <hr />
        <div className={styles.brandings}>
          <h1 className="hiddenH">Our Brands</h1>
          <h3 className="hiddenH">Brand 1</h3>
          <p className="hiddenC">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
          <h3 className="hiddenH">Brand 1</h3>
          <p className="hiddenC">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            numquam voluptatum quibusdam dolor cum dolores illo provident
            labore, voluptatem praesentium accusamus amet nostrum officiis
            beatae voluptates, ab adipisci consequuntur?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur vero esse rerum nostrum
            necessitatibus consequuntur dicta nemo corrupti laboriosam eum?
            Pariatur sint totam dolorum eligendi saepe eius quasi commodi
            aperiam!
          </p>
          <h3 className="hiddenH">Brand 1</h3>
          <p className="hiddenC">
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
