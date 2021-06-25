import { useState } from "react";
import styles from "./css/Home.module.css";
import { MobileNav, ContactUs, Card } from "../Components/index";
import punjab1 from "../punjab1.jpg";
import punjab2 from "../punjab2.jpg";
import ekam from "../ekam.jpg";
import video720 from "../video720.mp4";

function Home() {
  const [navOpen, setNavOpen] = useState(false);
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
  ];
  return (
    <div className={styles.container}>
      <video
        style={{ filter: `blur(1px)`, WebkitFilter: `blur(1px)` }}
        playsInline
        autoPlay
        muted
        loop
        className={styles.backgroundVideo}
      >
        <source src={video720} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <MobileNav menu={setNavOpen} />
        <div
          className={styles.header}
          style={navOpen ? { marginTop: "300px" } : {}}
        >
          <h1 className="animate__animated animate__flipInX">
            <span className={styles.gradientText}>
              Punjab food stuff trading l.l.c
            </span>
          </h1>
        </div>
        <div className={styles.about}>
          <h2>What we are?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corporis iure tempore modi soluta voluptatem dignissimos asperiores
            recusandae, nesciunt, veniam, iste enim nisi saepe expedita qui
            iusto consequatur ab ut!
          </p>
        </div>
        <div className={styles.bestseller}>
          <h2>What do we have?</h2>
          <p>Our Top selling items</p>
          <div className={styles.productContainer}>
            {products.map((product, key) => (
              <Card item={product} id={key} />
            ))}
          </div>
        </div>
        <div id="contactus">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
