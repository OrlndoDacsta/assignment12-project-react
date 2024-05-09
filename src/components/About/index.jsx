import "./style.css";
const About = ({ img }) => {
  return (
    <div className="about">
      <img src={img} alt="about" />
      <div className="about-text">
        <h1>About Grandma's Bakery</h1>
        <p>
          In grandma's bakery, you can typically find a variety of bread such as
          cakes, cookies, cupcakes, pretzel,macron, and bread. Some bread stores
          also offer sandwiches made with their freshly baked bread. These
          stores often pride themselves on using high-quality ingredients and
          traditional baking methods to create delicious and wholesome products.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};
export default About;
