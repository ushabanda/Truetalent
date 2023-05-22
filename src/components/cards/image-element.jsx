import React from "react";
import "./card-styles.css";

const MyImage = ({ imageTag }) => {
  return (
    <div className="company-logo">
      {imageTag}
    </div>
  );
};

export default MyImage;
