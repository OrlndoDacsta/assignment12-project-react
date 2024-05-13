import "./style.css";
const About = (props) => {
  const { img, id } = props;
  return (
    <div className="about"  id={id}>
      <img src={img} alt="about" />
      <div className="about-text">
        <h1>About Mom's Bakery</h1>
        <p>
          In Mom's bakery, you can typically find a variety of bread such as
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
