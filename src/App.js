import "./App.css";
import { Routes, Route } from "react-router-dom";
//import ReviewForm from "./components/Reviews/ReviewForm";
import Nav from "./components/Nav/Nav";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import MyReviews from "./components/Reviews/MyReviews";
import ResponsiveNavigation from "./components/Nav/ResponsiveNavigation";
function App() {
  return (
    <>
      <ResponsiveNavigation />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/myreviews" element={<MyReviews />} />
      </Routes>
    </>
  );
}

export default App;
