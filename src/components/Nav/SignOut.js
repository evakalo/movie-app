import navStyles from "../../styles/Nav.module.css";
import { Link } from "react-router-dom";
const SigninLinks = () => {
  return (
    <div className={navStyles.links}>
      <ul>
        <li>
          {" "}
          <Link to="/" className={navStyles.link}>
            {" "}
            Log out{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SigninLinks;
