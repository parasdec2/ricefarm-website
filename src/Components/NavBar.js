import styles from "./css/NavBar.module.css";
import logo from "../logo.svg";
import { useState } from "react";

function NavBar({ home }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    var scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled >= 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  if (home) {
    return (
      <div
        className={styles.container}
        style={
          scroll
            ? { backgroundColor: "#f8f5f1", position: "fixed" }
            : { backgroundColor: "", position: "fixed" }
        }
      >
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div
            className={styles.navContainer}
            style={scroll ? { color: "#e9896a" } : { color: "#343f56" }}
          >
            <div className={styles.navItems}>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Products</h3>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} style={{ backgroundColor: "#f8f5f1" }}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={styles.empty}></div>
        <div className={styles.navContainer} style={{ color: "#e9896a" }}>
          <div className={styles.navItems}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Products</h3>
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
