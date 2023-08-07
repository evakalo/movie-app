// import { Raleway } from "next/font/google";
// import { Open_Sans } from "next/font/google";
import listStyles from "../../styles/ReviewList.module.css";

import { useState } from "react";
import ReviewForm from "./ReviewForm";
import MovieReview from "./MovieReview";

const ReviewList = () => {
  const [review, setReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState({});

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagClick = (e) => {
    const tag = e.target.value;
    setSelectedTags((prevTags) => [...prevTags, tag]); // Update selectedTags

    setReview((prevReview) => ({
      ...prevReview,
      selectedTags: [...(prevReview.selectedTags || []), tag], // Update selectedTags in review
    }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview((values) => ({ ...values, [name]: value }));
  };
  const handleData = (data) => {
    if (data) {
      // console.log(data.Search);
      const film = data.Search;

      setData(film);
      setShowSuggestions(true);
    } else {
      console.log("No movies");
      setShowSuggestions(false);
    }
  };
  const handleError = (data) => {
    alert("No movies");
  };
  const fillInMovie = (movie, year, poster) => {
    setReview({
      title: movie,
      year: year,
      poster: poster,
    });

    setShowSuggestions(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const film = review.title;
    // const apiKey = super secret key;

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${film}`)
      .then((success) => {
        return success.json();
      })
      .then((movies) => {
        handleData(movies);
      })
      .catch((error) => {
        handleError(error);
      });

    // console.log(film);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReviews = [...reviews];
    updatedReviews.push(review);
    setReviews(updatedReviews);
    setReview({});

    console.log(selectedTags);
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
        handleSearch={handleSearch}
        showSuggestions={showSuggestions}
        fillInMovie={fillInMovie}
        data={data}
        movie={review}
      />

      {reviews.map((review, index) => (
        <MovieReview
          key={index}
          text={review.text}
          selectedTags={review.selectedTags}
          movie={review}
        />
      ))}
    </div>
  );
};

export default ReviewList;
