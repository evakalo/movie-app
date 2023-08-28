import navStyles from "../../styles/Nav.module.css";
import Links from "./Links";
import { auth } from "../../services/firebase.config";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className={navStyles.wrapper}>
      <Link to="/" className={navStyles.logo}>
        <h1>Critic cine</h1>
      </Link>{" "}
      {/* show links only when user logged in- check how!! */}
      {/* {auth.currentUser ? <Links /> : <></>} */}
      <Links />
    </div>
  );
};
export default Nav;
