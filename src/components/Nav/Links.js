import navStyles from "../../styles/Nav.module.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase.config";
import { useNavigate } from "react-router-dom";

const SigninLinks = ({ user }) => {
  console.log(user);
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => console.log("user signed out"))
      .catch((err) => console.log(err.message));
    navigate("/");
  };
  return (
    <div className={navStyles.links}>
      <ul>
        <Link to="/dashboard" className={navStyles.link}>
          Home
        </Link>
        <Link to="/myreviews" className={navStyles.link}>
          New review
        </Link>

        <li>
          {" "}
          <Link to="/" className={navStyles.link} onClick={logout}>
            {" "}
            Log out{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SigninLinks;
