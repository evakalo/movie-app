import navStyles from "../../styles/Nav.module.css";
import Links from "./Links";
import { auth } from "../../services/firebase.config";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    /* show links only when user logged in- check how!! */
    /* {auth.currentUser ? <Links /> : <></>} */
    <Links />
  );
};
export default Nav;
