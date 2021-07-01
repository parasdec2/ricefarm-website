import { useRef, useState } from "react";
import styles from "./css/About.module.css";
import { MobileNav, ContactUs } from "../Components/index";

function About() {
  const [navOpen, setNavOpen] = useState(false);
  const myRef = useRef(null);

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
            <h3 className="animate__animated animate__fadeIn">Brief:</h3>
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
            <h3 className="animate__animated animate__fadeIn">
              Establishment:
            </h3>
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
            <h3 className="animate__animated animate__fadeIn">
              How do we Work?
            </h3>
            <p className="animate__animated animate__fadeIn">
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

          <div className={styles.heading}>
            <h1
              className="animate__animated animate__fadeIn"
              style={{ textAlign: "center" }}
            >
              Our Founders'
            </h1>
            <div className={styles.founders}>
              <img width="300px" height="300px" />
              <div className={styles.foundersDetails}>
                <h2>Name 1</h2>
                <p className="animate__animated animate__fadeIn">
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
                <p className="animate__animated animate__fadeIn">
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
