import { useRef, useState, useEffect } from "react";
import styles from "./css/About.module.css";
import { MobileNav, ContactUs } from "../Components/index";

function About() {
  const [navOpen, setNavOpen] = useState(false);
  const myRef = useRef(null);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);
  const [desk, setDesk] = useState(false);
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768 && width > 498) {
      setTab(true);
      setMobile(false);
    } else if (width <= 498) {
      setTab(false);
      setMobile(true);
    }
  }, [hasWindow]);

  window.addEventListener("scroll", () => {
    function animate() {
      var elements;
      var windowHeight;

      function init() {
        elements = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
      }

      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var positionFromTop = elements[i].getBoundingClientRect().top;

          if (positionFromTop - windowHeight <= 60) {
            element.className = "animate__animated animate__fadeIn";
          }
        }
      }

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);

      init();
      checkPosition();
    }
    animate();
  });
  return (
    <div className={styles.container}>
      <MobileNav menu={setNavOpen} contact={myRef} />

      <div className={styles.content}>
        <div
          className={styles.mainContent}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          <h1 className="animate__animated animate__fadeIn">
            About Our Company
          </h1>
          <div className={styles.heading}>
            {/* <h3 className="animate__animated animate__fadeIn">Brief:</h3> */}
            <p className="animate__animated animate__fadeIn">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad,
              itaque iure ab, temporibus possimus a ut iste labore consequatur
              porro alias, nulla impedit reprehenderit sapiente. Eveniet quis
              minus expedita? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Suscipit ratione deserunt vero voluptatem vel
              voluptatibus itaque iure praesentium aperiam accusamus enim,
              doloribus excepturi culpa commodi officiis non sed necessitatibus
              laudantium.
            </p>
          </div>
          <hr />
          <div className={styles.heading}>
            <h3 className={"hidden"}>Establishment:</h3>
            <p className="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad,
              itaque iure ab, temporibus possimus a ut iste labore consequatur
              porro alias, nulla impedit reprehenderit sapiente. Eveniet quis
              minus expedita? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Suscipit ratione deserunt vero voluptatem vel
              voluptatibus itaque iure praesentium aperiam accusamus enim,
              doloribus excepturi culpa commodi officiis non sed necessitatibus
              laudantium.
            </p>
          </div>
          <hr />

          <div className={styles.heading}>
            <h3 className="hidden">How do we Work?</h3>
            <p className="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, praesentium saepe! Distinctio, saepe temporibus
              similique tenetur commodi velit exercitationem perspiciatis
              sapiente quia nesciunt, voluptatem blanditiis! Voluptatem deserunt
              autem animi molestiae!
            </p>
          </div>
          {/* <hr /> */}

          <div className={styles.warehouse}>
            <div>
              <img width="200px" height="200px" />
            </div>
            <div>
              <img width="200px" height="200px" />
            </div>
            <div>
              <img width="200px" height="200px" />
            </div>
          </div>
          <hr />

          <div className={styles.heading} id="services">
            <h1 className="hidden" style={{ textAlign: "center" }}>
              Our Founders'
            </h1>
            <div className={styles.founders}>
              <img width="300px" height="300px" />
              <div className={styles.foundersDetails}>
                <h2>Name 1</h2>
                <p className="hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, praesentium saepe! Distinctio, saepe temporibus
                  similique tenetur commodi velit exercitationem perspiciatis
                  sapiente quia nesciunt, voluptatem blanditiis! Voluptatem
                  deserunt autem animi molestiae!
                </p>
              </div>
            </div>

            <div className={styles.founders}>
              <img width="300px" height="300px" />
              <div className={styles.foundersDetails}>
                <h2>Name 2</h2>
                <p className="hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, praesentium saepe! Distinctio, saepe temporibus
                  similique tenetur commodi velit exercitationem perspiciatis
                  sapiente quia nesciunt, voluptatem blanditiis! Voluptatem
                  deserunt autem animi molestiae!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default About;
