import { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div
        className={`menu ${menuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div className={`menu-options ${menuVisible ? "fade-in" : ""}`}>
        <NavLink
          onClick={toggleMenu}
          to="/"
          activeclassname="active-menu-option"
          className="menu-option"
        >
          <h3>Search</h3>
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          to="/favorites"
          activeclassname="active-menu-option"
          className="menu-option"
        >
          <h3>Favorites</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
