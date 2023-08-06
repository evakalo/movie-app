// import { Raleway } from "next/font/google";
// import { Open_Sans } from "next/font/google";
import listStyles from "../../styles/ReviewList.module.css";

import { useState } from "react";
import ReviewForm from "./ReviewForm";
import MovieReview from "./MovieReview";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  //const [showReview, setShowReview] = useState(false);
  // const [selectedTags, setSelectedTags] = useState({});
  const [review, setReview] = useState({});
  const handleTagClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview((values) => ({ ...values, [name]: value }));
    console.log(e.target.value);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [...reviews];
    updatedReviews.push(review);
    setReviews(updatedReviews);
    console.log(updatedReviews);
    setReview({});
    //  setShowReview(true);
  };
  return (
    <div className={listStyles.container}>
      <ReviewForm
        title={review.title}
        text={review.text}
        director={review.director}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleTagClick={handleTagClick}
      />

      {/* <MovieReview
        title={review.title}
        text={review.text}
        director={review.director}
      ></MovieReview> */}

      {reviews.map((review, index) => (
        <MovieReview
          key={index}
          title={review.title}
          text={review.text}
          director={review.director}
          tag={review.tag}
        />
      ))}
    </div>
  );
};

export default ReviewList;
