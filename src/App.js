import "./App.css";
import { Routes, Route } from "react-router-dom";
//import ReviewForm from "./components/Reviews/ReviewForm";
import ReviewList from "./components/Reviews/ReviewList";
import Nav from "./components/Nav/Nav";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/reviewlist" element={<ReviewList />} />
      </Routes>
    </>
  );
}

export default App;
