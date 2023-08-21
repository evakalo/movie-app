import navStyles from "../../styles/Nav.module.css";

import SignOut from "./SignOut";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className={navStyles.wrapper}>
      <Link to="/" className={navStyles.logo}>
        {" "}
        <h1>Critic cine</h1>
      </Link>
      <SignOut />
    </div>
  );
};

export default Nav;
