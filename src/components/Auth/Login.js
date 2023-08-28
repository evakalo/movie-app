import { useState } from "react";
import loginStyles from "../../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.config";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //provjeri ima li bolja opcija
  //auth namjesti preko firebasea
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user logged in", cred.user);
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      setPassword(value);
      console.log(password);
    }
  };

  return (
    <div className={loginStyles.wrapper}>
      <form className={loginStyles.form} onSubmit={login}>
        <label>Your email</label>
        <input type="email" name="email" onChange={handleChange}></input>
        <label>Your password</label>
        <input type="password" name="password" onChange={handleChange}></input>
        <button type="submit">Log in</button>
      </form>
      <p>
        Not a user? <Link to="/signup">Sign up</Link>
      </p>
      <p>{errorMessage}</p>
    </div>
  );
};
export default Login;
