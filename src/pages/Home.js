import { useRef, useState } from "react";
import styles from "./css/Home.module.css";
import { MobileNav, ContactUs } from "../Components/index";
import bg from "../bg.jpeg";
import CountUp from "react-countup";

function Home() {
  const myRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.container}>
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
          src="https://firebasestorage.googleapis.com/v0/b/punjabfoodstufftrading.appspot.com/o/background%2Fezgif-6-17908584fd1a.mp4?alt=media&token=7b103739-9a01-482c-8e1b-b77f66864b1f"
          type="video/mp4"
        />
      </video>
      <div className={styles.content}>
        <MobileNav menu={setNavOpen} contact={myRef} />
        <div
          className={styles.header}
          style={navOpen ? { marginTop: "350px" } : {}}
        >
          <h1 className="animate__animated animate__flipInX">
            <span className={styles.gradientText}>
              Punjab food stuff trading l.l.c
            </span>
          </h1>
        </div>
        <div className={styles.maintext}>
          <div className={styles.contentDiv}>
            <h2 className="animate__animated animate__fadeIn">Who we are?</h2>
            <p className="animate__animated animate__fadeIn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et perferendis accusantium facilis,
              reiciendis ipsum esse non in ullam illo, maiores id harum earum
              quas laudantium vero quidem dolorem consequatur consectetur!
            </p>
          </div>
          <div className={styles.contentDiv}>
            <h2 className="animate__animated animate__fadeIn">Our History</h2>
            <p className="animate__animated animate__fadeIn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et perferendis accusantium facilis,
              reiciendis ipsum esse non in ullam illo, maiores id harum earum
              quas laudantium vero quidem dolorem consequatur consectetur!
            </p>
            <div className={styles.stats}>
              <div className={styles.statsItem}>
                <span>
                  <CountUp start={0} end={100} delay={1} />+
                </span>
                <h2>Customers</h2>
              </div>
              <div className={styles.statsItem}>
                <span>
                  <CountUp start={0} end={100} delay={1} />+
                </span>
                <h2>Years</h2>
              </div>
              <div className={styles.statsItem}>
                <span>
                  <CountUp start={0} end={100} delay={1} />+
                </span>
                <h2>Employees</h2>
              </div>
              <div className={styles.statsItem}>
                <span>
                  <CountUp start={0} end={100} delay={1} />+
                </span>
                <h2>Countrues</h2>
              </div>
            </div>
          </div>
          <div className={styles.contentDiv}>
            <h2 className="animate__animated animate__fadeIn">Our Services</h2>
            <p className="animate__animated animate__fadeIn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et perferendis accusantium facilis,
              reiciendis ipsum esse non in ullam illo, maiores id harum earum
              quas laudantium vero quidem dolorem consequatur consectetur!
            </p>
            <div className={styles.grain}>
              <h3>Grain Quality</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                veritatis soluta neque enim nam unde sint, maiores velit
                perspiciatis fuga ad deleniti, esse recusandae optio, asperiores
                consequuntur eos odit placeat.
              </p>
            </div>
            <div className={styles.packaging}>
              <h3>Packaging</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                veritatis soluta neque enim nam unde sint, maiores velit
                perspiciatis fuga ad deleniti, esse recusandae optio, asperiores
                consequuntur eos odit placeat.
              </p>
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
