import formStyles from "../../styles/ReviewForm.module.css";
const ReviewForm = ({
  title,
  text,
  director,
  handleChange,
  handleSubmit,
  handleTagClick,
  handleSearch,
  showSuggestions,
  data,
  fillInMovie,
  movie,
}) => {
  const buttons = [
    "Must-see",
    "Great acting",
    "Intense",
    "Awesome plot",
    "Great screenplay",
    "Beautifully shot",
    "Feel-good",
    "Melancholic",
  ];

  return (
    <section className={formStyles.review}>
      <form onSubmit={handleSubmit}>
        <h3 className={formStyles.title}>Your review </h3>
        <div className={formStyles.searchBar}>
          <h5>Title</h5>
          <input
            name="title"
            type="search"
            placeholder="e.g. Annie Hall..."
            value={title || ""}
            onChange={handleChange}
          ></input>{" "}
          <button className={formStyles.search} onClick={handleSearch}>
            Search
          </button>{" "}
        </div>
        {showSuggestions && data && data.length > 0 ? (
          <ul className={formStyles.searchResults}>
            {data.map((movie, index) => (
              <li
                onClick={() =>
                  fillInMovie(movie.Title, movie.Year, movie.Poster)
                }
                key={index}
              >
                {movie.Title} : {movie.Year}
              </li>
            ))}
          </ul>
        ) : !data ? (
          <p>No results</p>
        ) : (
          <></>
        )}{" "}
        <div className={formStyles.inputsWrapper}>
          <h4 className={formStyles.smallTitle}>
            Year
            <input
              name="year"
              type="text"
              placeholder="1977"
              value={movie.year || ""}
              onChange={handleChange}
            ></input>
          </h4>{" "}
          <h4 className={formStyles.smallTitle}>
            Director{" "}
            <input
              name="director"
              type="text"
              placeholder="e.g. Woody Allen"
              value={director || ""}
              onChange={handleChange}
            ></input>{" "}
          </h4>
        </div>
        <h3 className={formStyles.title}> What do you like about it ?</h3>
        <textarea
          name="text"
          cols="15"
          rows="3"
          value={text || ""}
          onChange={handleChange}
        ></textarea>
        <div className={formStyles.tags}>
          {buttons.map((button, index) => (
            <button
              key={index}
              type="button"
              onClick={handleTagClick}
              name="tag"
              value={button}
            >
              #{button}
            </button>
          ))}
        </div>{" "}
        <button type="submit" className={formStyles.reviewButton}>
          Submit review
        </button>
      </form>
    </section>
  );
};
export default ReviewForm;
