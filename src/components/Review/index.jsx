import "./style.css";

const Review = (props) => {
  const { image, id } = props;

  return (
    <div className="review-container" id={id}>
      <h1>Review From Our Customers</h1>
      <div className="review-wrap">
        <div className="review-photo">
          <img src={image} alt="review" />
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
          <button className="review-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
