import "./css/MobileNav.css";
import logo from "../logo.svg";
import { useState } from "react";

function MobileNav({ menu }) {
  const [change, setChange] = useState(true);
  function myFunction() {
    setChange(!change);
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      menu(false);
    } else {
      x.style.display = "block";
      menu(true);
    }
  }
  return (
    <div className="mobile-container">
      <div className="topnav">
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            height: "80px",
            width: "80px",
            objectFit: "cover",
          }}
        ></div>
        <div id="myLinks">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
        </div>
        <div className={change ? "icon" : "icon change"} onClick={myFunction}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
