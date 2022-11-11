import React from "react";
import "../Hero/Hero.css";
import jc from "../../assets/images/jc.jpg";
const HeaderHero = () => {
  return (
    <div
      className="main-hero-div"
      style={{ backgroundImage: `url(${jc})`, width: "100%", height: "100vh" }}
    >
      <div>
        <hr style={{ color: "greenyellow", border: "5px solid gold " }} />
        <h3>1—6 bed apartments at the finest address in Europe.</h3>
      </div>
    </div>
  );
};

export default HeaderHero;
