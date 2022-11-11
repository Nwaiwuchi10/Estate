import React from "react";
import "./Gallery2.css";
import bry from "../../assets/images/bry.jpg";
import { Typewriter } from "react-simple-typewriter";
const Gallery2 = () => {
  return (
    <div>
      <div className="mg-div-g">
        <h4 className="text-center">THE MOST IMPORTANT CORNER OF HYDE PARK</h4>
        <div className="disp-diva">
          <div className="div-flex1-div">
            <div className="by-disp">
              <div className="sp-by">
                <h4>by</h4>
              </div>
              <div>
                <hr
                  className="hr"
                  style={{ color: "black", background: "black" }}
                />{" "}
              </div>
              <div className="p-para">
                <Typewriter
                  words={[" Autography"]}
                  loop={1}
                  typeSpeed={70}
                  // deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <div className="raf">
              <div> RAFIEL VINO ARCHITECTS</div>
              <div>THE BRYANSTON </div>
            </div>
          </div>
          <div>
            <img src={bry} alt="hjf" className="bry-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
