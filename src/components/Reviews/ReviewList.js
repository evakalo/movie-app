import listStyles from "../../styles/ReviewList.module.css";
import { useEffect, useState } from "react";
import MovieReview from "./MovieReview";
import { auth } from "../../services/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase.config";
const ReviewList = () => {
  //const [review, setReview] = useState({});
  const [reviews, setReviews] = useState([]);

  const collectionReviews = collection(db, "reviews");

  //get reviews from collection that are NOT current users reviews, put them in reviews state and call the function
  const showReviews = async () => {
    const q = query(
      collectionReviews,
      where("uid", "!=", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const allReviews = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      // uid: auth.currentUser.uid,
    }));

    setReviews(allReviews);

    //sorts the newest on the top
    const sortedData = allReviews.sort((a, b) => {
      const dateA = a.createdAt.toDate().getTime();
      const dateB = b.createdAt.toDate().getTime();
      if (dateA > dateB) {
        return -1;
      } else {
        return 1;
      }
    });

    setReviews(sortedData);
  };
  useEffect(() => {
    showReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={listStyles.container}>
      <h4 style={{ color: "white" }}>Friends reviews</h4>
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
