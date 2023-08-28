import filmsStyles from "../../styles/MovieReview.module.css";
const MovieReview = ({ text, selectedTags, movie, user, deleteReview, id }) => {
  return (
    <div className={filmsStyles.wrapper}>
      <img
        src={movie.poster}
        className={filmsStyles.poster}
        alt="movie poster"
      ></img>
      <div className={filmsStyles.textWrapper}>
        <h3 className={filmsStyles.header}>{movie.title}</h3>
        <div className={filmsStyles.titles}>
          <h5 className={filmsStyles.cast}>Year: {movie.year}</h5>
          <h5 className={filmsStyles.cast}>Director: {movie.director}</h5>
        </div>
        <h5 className={filmsStyles.text}>Review:</h5>
        <p className={filmsStyles.text}> {text}</p>
        <div className={filmsStyles.tags}>
          {selectedTags ? (
            selectedTags.map((tag, index) => <p key={index}>#{tag}</p>)
          ) : (
            <p></p>
          )}
        </div>{" "}
      </div>
      {user ? (
        <div className={filmsStyles.buttons}>
          <button className={filmsStyles.editButton}>Edit </button>{" "}
          <button
            value={id}
            className={filmsStyles.editButton}
            onClick={() => deleteReview(id)}
          >
            Delete{" "}
          </button>
        </div>
      ) : (
        <></>
      )}

      {/* <p className={filmsStyles.author}> by: {data.author}</p> */}
    </div>
  );
};
export default MovieReview;
