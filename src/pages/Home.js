import { useEffect, useRef, useState } from "react";
import styles from "./css/Home.module.css";
import { MobileNav, ContactUs, Card } from "../Components/index";
import bg from "../bg.jpg";

function Home() {
  const [mobileDevice, setMobileDevice] = useState(true);
  const myRef = useRef(null);
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) setMobileDevice(true);
    else setMobileDevice(false);
  }, [hasWindow]);

  const [navOpen, setNavOpen] = useState(false);
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
      {mobileDevice ? (
        <img src={bg} className={styles.backgroundVideo} />
      ) : (
        <video
          style={{ filter: `blur(1px)`, WebkitFilter: `blur(1px)` }}
          playsInline
          autoPlay
          muted
          loop
          className={styles.backgroundVideo}
          poster={bg}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/background%2Fvideo720.mp4?alt=media&token=e67bae5f-0f16-45f7-831b-cfe4f9027359"
            type="video/mp4"
          />
        </video>
      )}
      <div className={styles.content}>
        <MobileNav menu={setNavOpen} contact={myRef} />
        <div
          className={styles.header}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          {console.log(mobileDevice)}
          <h1 className="animate__animated animate__flipInX">
            <span className={styles.gradientText}>
              Punjab food stuff trading l.l.c
            </span>
          </h1>
        </div>
        <div className={styles.maintext}>
          <div className={styles.about}>
            <h2 className="animate__animated animate__fadeIn">What we are?</h2>
            <p className="animate__animated animate__fadeIn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut!
            </p>
          </div>
          <div className={styles.bestseller}>
            <h2 className="animate__animated animate__fadeIn">
              What do we have?
            </h2>
            <p className="animate__animated animate__fadeIn">
              Our Top selling items
            </p>
            <div className={styles.productContainer}>
              {products.map((product, key) => (
                <Card item={product} id={key} />
              ))}
            </div>
          </div>
        </div>

        <div ref={myRef}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default Home;
