import "./css/MobileNav.css";
import logo from "../logo.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function MobileNav({ menu, contact }) {
  const history = useHistory();
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
  const executeScroll = () => {
    myFunction();
    contact.current.scrollIntoView();
  };
  return (
    <div className="mobile-container">
      <div className="topnav">
        <div
          onClick={() => history.push("/")}
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            height: "80px",
            width: "80px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        ></div>
        <div id="myLinks">
          <a href="/">Home</a>
          <a href="/catalog">Products</a>
          <a href="/aboutus">About</a>
          <p onClick={executeScroll}>Contact Us</p>
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
