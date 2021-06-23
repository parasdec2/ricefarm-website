import styles from "./css/NavBar.module.css";
import logo from "../logo.png";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={styles.navContainer}>
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
