import React from "react";
import "./card-styles.css";
import MyImage from './image-element';

const Card = ({ imageUrl,title, description, location }) => {
  return (
    <div className="job-card">
      <MyImage />
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
