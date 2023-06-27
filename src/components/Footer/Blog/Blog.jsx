import React from "react";
import images from "../../images/truetalent-logo.svg";
import images1 from "../../images/Figure-Salary.png"
import images2 from "../../images/Salary-Offer.png"
import images3 from "../../images/Earn-Money.png"
import images4 from "../../images/Increment-Salary.png"
import "./blog.style.css";

function Blog() {
  return (
    <div className="blog-container">
      <div className="truetalent-logo">
        <img src={images} alt="truetalent-logo.svg" />
      </div>
      <div className="marque-container">
        <button type="button">Updates</button>
        <div className="marque-content">
          <marquee  direction="left" width="1200px" height="100px" behavior="scroll" Scrolldelay="100" loop="infinite"  >
            <h4>
              <img
                src={images1}
                alt="Figure-Salary.png"
                className="blog-figure-salary"
              />
              How to get a 6-figure Salary as a Fresher?
            </h4>
            <h4>
              <img
                src={images2}
                alt="Salary-Offer.png"
                className="blog-offer-salary"
              />
              Tips to negotiate the best salary offer
            </h4>
            <h4>
              <img
                src={images3}
                alt="Earn-Money.png"
                className="blog-earn-money"
              />
              How to earn good money using your skills and be your own boss!
            </h4>
            <h4>
              <img
                src={images4}
                alt="Increment-Salry.png"
                className="blog-increment-salary"
              />
              How do you get the best increment at your workplace?
            </h4>
          </marquee>
        </div>
      </div>
      <section>
       <div className="blog-image-container">
        <div className="image-box1">
        <img src={images1} alt="Figure-Salary.png" />
        <div className="image-box1-content">
        <button type="button">INTERVIEW</button>
        <h5>How do you get the best increment at your workplace?</h5>
        </div>
        </div>
        <div className="image-box1">
        <img src={images1} alt="Figure-Salary.png" />
        <div className="image-box1-content">
        <button type="button">INTERVIEW</button>
        <h5>How do you get the best increment at your workplace?</h5>
        </div>
        </div>
        <div className="image-box1">
        <img src={images1} alt="Figure-Salary.png" />
        <div className="image-box1-content">
        <button type="button">INTERVIEW</button>
        <h5>How do you get the best increment at your workplace?</h5>
        </div>
        </div>
        <div className="image-box1">
        <img src={images1} alt="Figure-Salary.png" />
        <div className="image-box1-content">
        <button type="button">INTERVIEW</button>
        <h5>How do you get the best increment at your workplace?</h5>
        </div>
        </div>
       </div>
      </section>
    </div>
  );
}

export default Blog;
