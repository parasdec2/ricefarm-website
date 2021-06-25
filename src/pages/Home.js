import styles from "./css/Home.module.css";
import Card from "../Components/Card";
import video720 from "../video720.mp4";
import NavBar from "../Components/NavBar";
import MobileNav from "../Components/MobileNav";
import { useState } from "react";
import punjab1 from "../punjab1.jpg";
import punjab2 from "../punjab2.jpg";
import ekam from "../ekam.jpg";

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
        {/* <NavBar home /> */}
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
        <div className={styles.reach}>
          <h2>Reach Us</h2>
          <div className={styles.reachContent}>
            <div className={styles.address}>
              <div>
                <p>Email: abc@def.com</p>
                <p>Phone: 123456</p>
                <p>Address: 123456</p>
              </div>
            </div>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.358382683108!2d76.663461!3d30.685234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65ef2d487904b8f3!2sChandigarh%20Engineering%20College-Block%203%2C%20Wilson%20Block!5e0!3m2!1sen!2sus!4v1614437465176!5m2!1sen!2sus"
                width="400"
                height="240"
                style={{
                  border: "none",
                  overflow: "hidden",
                  filter: "hue-rotate(180deg)",
                }}
                allowFullScreen=""
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
                title="Chandigarh Engineering College"
                // loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
