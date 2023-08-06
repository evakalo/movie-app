import formStyles from "../../styles/ReviewForm.module.css";
const ReviewForm = ({
  title,
  text,
  director,
  handleChange,
  handleSubmit,
  handleTagClick,
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
        <h3 className={formStyles.title}>Movie/Series Title </h3>
        <input
          name="title"
          type="text"
          placeholder="e.g. Blade Runner..."
          value={title || ""}
          onChange={handleChange}
        ></input>{" "}
        <h3 className={formStyles.title}>Director</h3>
        <input
          name="director"
          type="text"
          placeholder="e.g. Blade Runner..."
          value={director || ""}
          onChange={handleChange}
        ></input>{" "}
        <h3>What do you like about it</h3>
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
