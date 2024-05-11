import "./style.css";

const Footer = (props) => {
  const { link, icon } = props;
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div>
          {link.map((item, index) => (
            <div className="footer-link">
              <a href="#" key={index}>
                {item}
              </a>
            </div>
          ))}
        </div>

        <div className="footer-contact">
          <h2>Contact</h2>
          <p>Call us: +628-4567-7890</p>
          <p>Write us: momsbake@example.com</p>
          <p>Visit us: Palembang,Sumatera Selatan</p>
        </div>

        <div className="footer-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.5335978315097!2d104.71589823360688!3d-2.9323374963404047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7469cdf29949%3A0xa1df0f67bc919e98!2sJM%20Sukarami!5e0!3m2!1sid!2sid!4v1715351153076!5m2!1sid!2sid"></iframe>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2024. Mom's Bakery</p>

        <div className="footer-icon">
          {icon.map((item, index) => (
            <a href="#" key={index}>
              <img src={item} alt="icon"/>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
