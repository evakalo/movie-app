import { useState } from "react";
//same form so use the same styles
import loginStyles from "../../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //hook usenavigate so after the user is signed up - you navigate to the dashboard - insde signup function
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
      console.log(email);
    } else if (name === "password") {
      setPassword(value);
      console.log(password);
    } else if (name === "displayName") {
      setDisplayname(value);
    }
  };

  //-createuser.. - takes 3 arguments- auth object (auth server we stored in this variable), email and password
  //it is async and returns a promise - put then method (then takes a function as argument, which takes cred as argument)
  const signup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      // cred - user credential object- on this object we have access to the user
      .then((cred) => {
        console.log("user created", cred.user);
        //call createuser function with cred and displayname, function defined below

        createUser(cred.user, displayName);

        setEmail("");
        setPassword("");
        setDisplayname("");
        // cred.user.updateProfile({ displayName: displayName });

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };

  const usersCollection = collection(db, "users");
  //function to put  the user in the collection users
  const createUser = async (user, displayName) => {
    try {
      await addDoc(usersCollection, {
        uid: user.uid,
        displayName: displayName,
        email: user.email,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={loginStyles.wrapper}>
      <form className={loginStyles.form} onSubmit={signup}>
        <label>Username</label>
        <input type="text" name="displayName" onChange={handleChange}></input>
        <label>Your email</label>
        <input type="email" name="email" onChange={handleChange}></input>
        <label>Your password</label>
        <input type="password" name="password" onChange={handleChange}></input>
        <button type="submit">Log in</button>
      </form>
      <p>
        Already a user? <Link to="/">Log in</Link>
      </p>
      <p>{errorMessage}</p>
    </div>
  );
};
export default SignUp;
