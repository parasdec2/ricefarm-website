import { useState } from "react";
import styles from "./css/Home.module.css";
import { MobileNav, ContactUs, Card } from "../Components/index";

function Home() {
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
        <source
          src="https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/background%2Fvideo720.mp4?alt=media&token=e67bae5f-0f16-45f7-831b-cfe4f9027359"
          type="video/mp4"
        />
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
