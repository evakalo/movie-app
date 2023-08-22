import "./App.css";
import { Routes, Route } from "react-router-dom";
//import ReviewForm from "./components/Reviews/ReviewForm";
import Nav from "./components/Nav/Nav";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
