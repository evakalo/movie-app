"use client";

import burgerStyles from "../../styles/Burger.module.css";
import { LuAlignLeft, LuArrowLeftCircle } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
const BurgerNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`burgerStyles.wrapper open_sans.className`}
      onClick={toggleMenu}
    >
      {!isMenuOpen && <LuAlignLeft className={burgerStyles.burger} />}

      {isMenuOpen && (
        <div className={burgerStyles.nav}>
          <ul>
            <LuArrowLeftCircle className={burgerStyles.arrow} />
            <Link to="/dashboard">
              <li className={burgerStyles.link}>Home</li>
            </Link>

            <Link to="/myreviews">
              <li className={burgerStyles.link}> My Reviews </li>
            </Link>

            <Link to="/">
              <li className={burgerStyles.link}>Log out</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default BurgerNav;
