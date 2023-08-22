import { useState } from "react";
import loginStyles from "../../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //provjeri ima li bolja opcija
  //auth namjesti preko firebasea
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/dashboard");
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
  // tu dovrsi auth iz firebasea kad napravis projekt
  //i kopiraj funkcije
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
    </div>
  );
};
export default Login;
