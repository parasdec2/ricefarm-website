import { useRef, useState } from "react";
import styles from "./css/Home.module.css";
import { MobileNav, ContactUs } from "../Components/index";
import bg from "../bg.jpeg";
import CountUp from "react-countup";
import ScrollToTop from "../helper/ScrollToTop";

function Home() {
  const myRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);
  const [showStats, setShowStats] = useState(false);

  window.addEventListener("scroll", () => {
    function animate() {
      var statElement;
      var content;
      var heading;
      var windowHeight;

      function init() {
        content = document.querySelectorAll(".hiddenC");
        heading = document.querySelectorAll(".hiddenH");
        statElement = document.querySelectorAll(".statsDiv");
        windowHeight = window.innerHeight;
      }

      function checkElemets() {
        if (statElement.length < 1) {
          window.removeEventListener("scroll", showStat);
        }
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

      function showStat() {
        for (var i = 0; i < statElement.length; i++) {
          var e = statElement[i];
          var position = statElement[i].getBoundingClientRect().top;

          if (position - windowHeight <= 50) {
            setShowStats(true);
            e.classList.remove("statsDiv");
          }
        }
      }

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("scroll", showStat);
      window.addEventListener("resize", init);

      init();
      checkElemets();
      checkPosition();
      showStat();
    }
    animate();
  });

  return (
    <div className={styles.container}>
      <div className={styles.bgv}>
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
      </div>
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
        <div className={styles.contentDiv}>
          <h2
            className="animate__animated animate__fadeIn"
            style={{ textAlign: "center" }}
          >
            <span className={styles.subHeading}>Who we are</span>
          </h2>
          <p className="animate__animated animate__fadeIn">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corporis iure tempore modi soluta voluptatem dignissimos asperiores
            recusandae, nesciunt, veniam, iste enim nisi saepe expedita qui
            iusto consequatur ab ut! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Et perferendis accusantium facilis, reiciendis
            ipsum esse non in ullam illo, maiores id harum earum quas laudantium
            vero quidem dolorem consequatur consectetur!
          </p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.maintext}>
          <div className={styles.contentDiv}>
            <h2 className="hiddenH" style={{ textAlign: "center" }}>
              <span className={styles.subHeading}>Our History</span>
            </h2>
            <p className="hiddenC">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et perferendis accusantium facilis,
              reiciendis ipsum esse non in ullam illo, maiores id harum earum
              quas laudantium vero quidem dolorem consequatur consectetur!
            </p>
            <div className="statsDiv">
              <div className={styles.stats}>
                <div className={styles.statsItem}>
                  {showStats && (
                    <span>
                      <CountUp start={0} end={100} delay={0} />+
                    </span>
                  )}
                  <h2>Customers</h2>
                </div>
                <div className={styles.statsItem}>
                  {showStats && (
                    <span>
                      <CountUp start={0} end={5} delay={0} duration={5} />+
                    </span>
                  )}
                  <h2>Years</h2>
                </div>
                <div className={styles.statsItem}>
                  {showStats && (
                    <span>
                      <CountUp start={0} end={100} delay={0} />+
                    </span>
                  )}
                  <h2>Employees</h2>
                </div>
                <div className={styles.statsItem}>
                  {showStats && (
                    <span>
                      <CountUp start={0} end={10} delay={0} />+
                    </span>
                  )}
                  <h2>Countries</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentDiv}>
            <h2 className="hiddenH" style={{ textAlign: "center" }}>
              <span className={styles.subHeading}>Our Services</span>
            </h2>
            <p className="hiddenC">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam corporis iure tempore modi soluta voluptatem dignissimos
              asperiores recusandae, nesciunt, veniam, iste enim nisi saepe
              expedita qui iusto consequatur ab ut! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Et perferendis accusantium facilis,
              reiciendis ipsum esse non in ullam illo, maiores id harum earum
              quas laudantium vero quidem dolorem consequatur consectetur!
            </p>
            <div className={styles.grain}>
              <h3 className="hiddenH">Grain Quality</h3>
              <p className="hiddenC">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                veritatis soluta neque enim nam unde sint, maiores velit
                perspiciatis fuga ad deleniti, esse recusandae optio, asperiores
                consequuntur eos odit placeat.
              </p>
            </div>
            <div className={styles.packaging}>
              <h3 className="hiddenH">Packaging</h3>
              <p className="hiddenC">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                veritatis soluta neque enim nam unde sint, maiores velit
                perspiciatis fuga ad deleniti, esse recusandae optio, asperiores
                consequuntur eos odit placeat.
              </p>
              <div className={styles.packets}>
                <div>
                  <img width="200px" height="200px" alt="pkg" />
                </div>
              </div>
            </div>
          </div>
          <div ref={myRef}>
            <ContactUs home />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Home;
