import filmsStyles from "../../styles/MovieReview.module.css";

const MovieReview = ({ title, text, director, children, tag }) => {
  return (
    <div className={filmsStyles.wrapper}>
      <h2>{children}</h2>
      <h3 className={filmsStyles.header}>Title : {title}</h3>
      <h5 className={filmsStyles.cast}>director: {director}</h5>
      <p className={filmsStyles.text}>Review: {text}</p>
      <p className={filmsStyles.tags}>#{tag}</p>
      {/* <p className={filmsStyles.author}> by: {data.author}</p> */}
    </div>
  );
};
export default MovieReview;
