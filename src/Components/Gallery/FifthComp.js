import React from "react";
import imav from "../../assets/images/imav.jpg";
import "./Fifth.css";
import bf from "../../assets/images/bf.jpg";
import hen from "../../assets/images/hen.jpg";
import nba from "../../assets/images/nba.jpg";
import bryb from "../../assets/images/bryb.jpg";
const FifthComp = () => {
  return (
    <div className="fifth-main">
      <div className="cl-mg">
        <div className="class-display">
          <div className="div-img-fith">
            <img src={imav} alt="nvh" className="imge-fifth" />
          </div>
          <div className="h-divs">
            <h3>SPACE IS THE ULTIMATE CITY LUXURY</h3>
          </div>
        </div>
        <div>
          <h3 className="text-center">
            Contemporary detailing with elegant aesthetics
          </h3>
          <div className="floj-div">
            <img src={bf} alt="hj" className="bn-img" />
          </div>
        </div>
        <div className="desp-div">
          <div className="floker-div">
            <img src={hen} alt="hj" className="bner-img" />
          </div>
          <div className="floker2-div">
            <img src={nba} alt="hj" className="bner-img2" />
          </div>
        </div>
        <div className="fifth-classd">
          <div className="div-fifth-img-fith">
            <img src={bryb} alt="nvh" className="fifth-imge-fifth" />
          </div>
          <div className="h-fifth-divs">
            <h3>The world at your window</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthComp;
