import "./App.css";
import { Routes, Route } from "react-router-dom";
//import ReviewForm from "./components/Reviews/ReviewForm";
import ReviewList from "./components/Reviews/ReviewList";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ReviewList />} />
    </Routes>
  );
}

export default App;
