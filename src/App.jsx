import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Navlogo from "./components/Navlogo";
import logoImg from "./assets/img/logo.png";
import Card_1 from "./components/Card_1";
import Img1 from "./assets/img/card-1.png";
import Img2 from "./assets/img/card-2.png";
import Img3 from "./assets/img/card-3.png";
import Card_2 from "./components/Card_2";
import cakes from "./assets/img/card-cakes.png";
import cupcakes from "./assets/img/card-cupcakes.png";
import pretzel from "./assets/img/card-pretzel.png";
import macron from "./assets/img/card-macron.png";
import cookies from "./assets/img/card-cookies.png";
import bread from "./assets/img/card-bread.png";
import About from "./components/About";
import aboutImg from "./assets/img/about.png";
import reviewImg from "./assets/img/review.png";
import Review from "./components/Review";
import Footer from "./components/Footer";
import iconFb from "./assets/icon/facebook.svg";
import iconIg from "./assets/icon/instagram.svg";
import iconYt from "./assets/icon/youtube.svg";
import Member from "./components/Member";

const App = () => {
  const linkList = ["Home", "About", "Menu", "Contact"];
  const cardList_1 = [Img1, Img2, Img3];
  const cardList_2 = [
    { img: cakes, title: "Cakes" },
    { img: cupcakes, title: "Cupcakes" },
    { img: pretzel, title: "Pretzels" },
    { img: macron, title: "Macron" },
    { img: cookies, title: "Cookies" },
    { img: bread, title: "Bread" },
  ];
  const footerLink = [
    "Home",
    "About",
    "Services",
    "Member",
    "FAQs",
    "Contact Us",
  ];
  const iconList = [iconFb, iconIg, iconYt];

  return (
    <div>
      <section>
        <div className="navbar-container">
          <Navlogo logo={logoImg} />
          <Navbar nav={linkList} />
        </div>
        <Card_1 card1={cardList_1} />
      </section>

      <Card_2 card2={cardList_2} />
      <About img={aboutImg} />
      <Review image={reviewImg} />
      <Member />
      <Footer link={footerLink} icon={iconList} />
    </div>
  );
};

export default App;
