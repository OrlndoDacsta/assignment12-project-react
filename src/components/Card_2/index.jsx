import "./style.css";
const Card_2 = (props) => {
  const { card2 } = props;

  return (
    <div className="card_2-container">
      <h2 className="card_2-title">What We Offer</h2>
      <p className="card_2-subtitle">
        Introducing you a wide variety of bakery items with unique taste and the
        creamiest of cakes in the city.
      </p>

      <div className="card_2-wrap">
        {card2.map((item) => (
          <>
            <div className="card_2">
              <img src={item.img} alt="imgcard2" />
              <p>{item.title}</p>
            </div>
           
          </>
        ))}
      </div>
    </div>
  );
};

export default Card_2;
