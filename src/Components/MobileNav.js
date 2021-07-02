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
      var width = window.innerWidth;
      menu(false);
    } else {
      x.style.display = "block";
      var width = window.innerWidth;
      if (width > 768) {
        menu(false);
      } else {
        menu(true);
      }
    }
  }
  const executeScroll = () => {
    myFunction();
    contact.current.scrollIntoView();
  };
  return (
    <div className="mobile-container">
      <div className="topnav navMobile">
        <div onClick={() => history.push("/")} className="navLogo">
          <img src={logo} height="70px" />
          <span>Punjab food stuff trading l.l.c</span>
        </div>
        <div id="myLinks" className="navLinks">
          <p onClick={() => history.push("/")}>Home</p>
          <p onClick={() => history.push("/catalogue")}>Products</p>
          <p onClick={() => history.push("/aboutus")}>About</p>
          <p onClick={executeScroll}>Contact Us</p>
        </div>
        <div className={change ? "icon" : "icon change"} onClick={myFunction}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className="topnav navDesktop">
        <div onClick={() => history.push("/")} className="navLogo">
          <img src={logo} height="70px" />
          <span>Punjab food stuff trading l.l.c</span>
        </div>
        <div id="myLinks" className="navLinks">
          <p onClick={() => history.push("/")}>Home</p>
          <p onClick={() => history.push("/catalogue")}>Products</p>
          <p onClick={() => history.push("/aboutus")}>About</p>
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
