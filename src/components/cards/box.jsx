import React from "react";
import "./styles.css";

const Card = ({ imageUrl,title, description, location }) => {
  return (
    <div className="job-card">
      <img src={imageUrl} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
