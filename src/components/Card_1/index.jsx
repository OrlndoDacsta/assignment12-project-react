import "./style.css";

const Card_1 = ({ card1 }) => {
  return (
    <div className="card_1-container">
      <h1 className="card_1-title">Enjoy fresh items of our Mom’s Recipe </h1>
      <button className="card_1-button">See Menu</button>

      <div className="card_1-wrap">
        {card1.map((item, index) => (
          <div className="card_1" key={index}>
            <img src={item} alt="card1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card_1;
