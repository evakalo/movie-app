import listStyles from "../../styles/ReviewList.module.css";

import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import MovieReview from "./MovieReview";
import { auth } from "../../services/firebase.config";
import {
  addDoc,
  serverTimestamp,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebase.config";
const MyReviews = () => {
  const [review, setReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [data, setData] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  //const [id, setId] = useState("");
  // const [author, setAuthor] = useState("");
  const [user, setUser] = useState(true);

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
  //if there are movies, put them in data state - send as props to review form
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
  //fills the details of the movie in the form fields
  const fillInMovie = (movie, year, poster) => {
    setReview({
      title: movie,
      year: year,
      poster: poster,
    });

    setShowSuggestions(false);
  };
  //search by the movie in the api
  const handleSearch = (e) => {
    e.preventDefault();
    const film = review.title;
    const apiKey = "secret api";

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${film}`)
      .then((results) => {
        return results.json();
      })
      .then((movies) => {
        handleData(movies);
      })
      .catch((error) => {
        handleError(error);
      });

    // console.log(film);
  };

  const collectionReviews = collection(db, "reviews");
  // let id;
  const addReview = async (e) => {
    try {
      console.log(review);
      const reviewRef = await addDoc(collectionReviews, {
        title: review.title,
        year: review.year,
        uid: auth.currentUser.uid,
        director: review.director,
        poster: review.poster,
        // author: author,
        text: review.text,
        createdAt: serverTimestamp(),
      });
      console.log("Adding review with id", reviewRef.id);
      // id = reviewRef.id;
      // console.log(id);
      // deleteReview(reviewRef.id);
    } catch (error) {
      console.log("Error adding review:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //copied the reviews array, added new review, set updated reviews in the reviews state
    //console.log(auth.currentUser.uid);
    setReview((previousValues) => ({
      ...previousValues,
      uid: auth.currentUser.uid,
    }));
    addReview();

    const updatedReviews = [...reviews];
    updatedReviews.push(review);
    setReviews(updatedReviews);
    //clear the form
    setReview({});
    showReviews();
  };
  //get current user's reviews from collection - filter by cuurent user uid, put them in reviews state and call the function
  const showReviews = async () => {
    const q = query(
      collectionReviews,
      where("uid", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const userReviews = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      uid: auth.currentUser.uid,
    }));

    setReviews(userReviews);

    //sorts the newest on the top
    // const sortedData = userReviews.sort((a, b) => {
    //   const dateA = a.createdAt.toDate().getTime();
    //   const dateB = b.createdAt.toDate().getTime();
    //   if (dateA > dateB) {
    //     return -1;
    //   } else {
    //     return 1;
    //   }
    // });

    //setReviews(sortedData);
  };

  const deleteReview = async (reviewId) => {
    try {
      //use bookId to set the document to delete
      const reviewRef = doc(collectionReviews, reviewId);
      // Delete the document and recall the function to remove from the list
      await deleteDoc(reviewRef);
      showReviews();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  useEffect(() => {
    showReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          key={review.id}
          text={review.text}
          selectedTags={review.selectedTags}
          movie={review}
          id={review.id}
          user={user}
          deleteReview={() => deleteReview(review.id)}
        />
      ))}
    </div>
  );
};

export default MyReviews;
