import React from "react";
export const RenderMisc = ({ miscName, value, title }) => {
  if (!value) return "";
  switch (miscName) {
    case "strYoutube":
      value = "https://www.youtube.com/embed/" + value;
      return (
        <div className="column left">
          <h5>Video Recipe</h5>
          <div className="videoWrapper">
            <iframe title={title} width="420" height="315" src={value}></iframe>
          </div>
        </div>
      );
    default:
      return (
        <p>
          <span className="bold">{miscName}: </span>
          {value}
        </p>
      );
  }
};
