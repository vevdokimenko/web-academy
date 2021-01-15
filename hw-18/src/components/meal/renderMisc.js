export const renderMisc = (miscName, value, title) => {
  switch (miscName) {
    case "strYoutube":
      if (value) {
        value = "https://www.youtube.com/embed/" + value;
        return (
          <div className="column left">
            <h5>Video Recipe</h5>
            <div className="videoWrapper">
              <iframe
                title={title}
                width="420"
                height="315"
                src={value}
              ></iframe>
            </div>
          </div>
        );
      }
      break;
    default:
      if (value) {
        return (
          <p>
            <span className="bold">{miscName}: </span>
            {value}
          </p>
        );
      }
      break;
  }
};
