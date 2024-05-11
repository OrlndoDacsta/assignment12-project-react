import "./style.css";

const Member = () => {
  return (
    <div className="member">
      <div className="member-container">
        <h1>Join Our Member</h1>
        <p>To Get Our Exclusive Offers and Discounts</p>

        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Phone" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Member;
