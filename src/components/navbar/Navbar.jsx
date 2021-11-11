import {
  faBars,
  faSearch,
  faShoppingBag,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const StickyNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  window.addEventListener("scroll", StickyNavbar);
  return (
    <nav className={!navbar ? "nav" : "nav active"}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className={!sidebar ? "nav-item" : "nav-item active"}>
        <Link className="list-item" to="/">
          <li>Home</li>
        </Link>
        <Link className="list-item" to="/about">
          <li>About</li>
        </Link>
        <Link className="list-item" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="list-item" to="/products">
          <li>Products</li>
        </Link>
        <Link className="list-item" to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
      <form action="" method="get">
        <input type="search" name="" id="" placeholder="search for products" />
        <FontAwesomeIcon icon={faSearch} className="icon" color="#000" />
      </form>

      <div className="cart">
        <FontAwesomeIcon
          icon={faShoppingBag}
          className="shopping"
          color="#181717"
          size="2x"
        />
        <span className="cart-value">0</span>
      </div>

      <div className="sidebar hidden">
        {
         !sidebar?
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="icons"
            onClick={() => setSidebar(!sidebar)}
          />:
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          className="icons"
          onClick={() => setSidebar(!sidebar)}
        />
        }
      </div>
    </nav>
  );
};

export default Navbar;
