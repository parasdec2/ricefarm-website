import { useRef, useState } from "react";
import styles from "./css/About.module.css";
import { MobileNav, ContactUs } from "../Components/index";
import ScrollToTop from "../helper/ScrollToTop";

function About() {
  const [navOpen, setNavOpen] = useState(false);
  const myRef = useRef(null);

  window.addEventListener("scroll", () => {
    function animate() {
      var content;
      var heading;
      var windowHeight;

      function init() {
        content = document.querySelectorAll(".hiddenC");
        heading = document.querySelectorAll(".hiddenH");
        windowHeight = window.innerHeight;
      }

      function checkElemets() {
        if (content.length < 1 && heading.length < 1) {
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
            elementH.classList.add("animate__zoomIn");
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
            elementC.classList.add("animate__fadeIn");
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
          className={styles.mainContent}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          <h1 className="animate__animated animate__fadeIn">
            About Our Company
          </h1>
          <div className={styles.heading}>
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
            <h3 className="hiddenH">Establishment:</h3>
            <p className="hiddenC">
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
          <div className="hiddenC">
            <div className={styles.warehouse}>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
            </div>
            <hr />
          </div>

          <div className={styles.heading}>
            <h3 className="hiddenH">How do we Work?</h3>
            <p className="hiddenC">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, praesentium saepe! Distinctio, saepe temporibus
              similique tenetur commodi velit exercitationem perspiciatis
              sapiente quia nesciunt, voluptatem blanditiis! Voluptatem deserunt
              autem animi molestiae!
            </p>
          </div>
          {/* <hr /> */}

          <div className="hiddenC">
            <div className={styles.warehouse}>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
              <div>
                <img width="200px" height="200px" alt="img" />
              </div>
            </div>
            <hr />
          </div>

          <div className={styles.heading} id="services">
            <h1 className="hiddenH" style={{ textAlign: "center" }}>
              Our Founders'
            </h1>
            <div className={styles.founders}>
              <img
                className="hiddenH"
                width="300px"
                height="300px"
                alt="founder1"
              />
              <div className={styles.foundersDetails}>
                <h2 className="hiddenC">Name 1</h2>
                <p className="hiddenC">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, praesentium saepe! Distinctio, saepe temporibus
                  similique tenetur commodi velit exercitationem perspiciatis
                  sapiente quia nesciunt, voluptatem blanditiis! Voluptatem
                  deserunt autem animi molestiae!
                </p>
              </div>
            </div>

            <div className={styles.founders}>
              <img
                className="hiddenH"
                width="300px"
                height="300px"
                alt="founder2"
              />
              <div className={styles.foundersDetails}>
                <h2 className="hiddenC">Name 2</h2>
                <p className="hiddenC">
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
      <ScrollToTop />
    </div>
  );
}

export default About;
