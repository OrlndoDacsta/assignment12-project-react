import React from "react";
import "./style.css";

const Review = (props) => {
  const { img, right, left } = props;

  return (
    <div className="review-container">
      <h1>Review From Our Customers</h1>
      <div className="review-wrap">
        <button className="review-button">
          <img src={left} alt="" />
        </button>

        <div className="review-img">
          <img src={img} alt="review" />
        </div>

        <div className="review-text">
          <p>
            This place is great. They have so many baked goods it will blow your
            mind. They have everything from large cakes to cupcakes to donuts to
            pastries to breads to cookies. The price is also fair.
          </p>
          <p>
            <b>Aisha Pun,</b> Student
          </p>
        </div>

        <button className="review-button">
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Review;
