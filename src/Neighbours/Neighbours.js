import React, { useState } from "react";
import nb from "../assets/images/nb.jpeg";
import PersistentDrawerRight from "../Components/NavBar/NavBars";
import "../Neighbours/Neighbours.css";
import flowers from "../assets/images/flowers.jpg";
import byc from "../assets/images/byc.jpg";
import { Typewriter } from "react-simple-typewriter";
import redy from "../assets/images/redy.jpg";
import Hover from "./Hover";
const Neighbours = () => {
  return (
    <div>
      <PersistentDrawerRight />
      <div
        className="main-neigh-div"
        style={{
          backgroundImage: `url(${nb})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <hr style={{ color: "white", border: "1px solid white " }} />
          <h3 className="neigh-h3">
            Access to the very best of London, within walking distance and
            beyond.
          </h3>
        </div>
      </div>
      <div className="next-main-div">
        <div>
          <h3 className="most-h">A MOST EXTRAORDINARY LOCATION</h3>
          <div className="n-flower-display">
            <div>
              <img src={flowers} alt="kdhk" className="fl-img-g" />
            </div>
            <div className="p-flow">
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
                    words={[" Oliver"]}
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
          </div>
        </div>
        <div className="neighbour-fouth-slide">
          <div className="fout-img-div">
            <img src={byc} alt="mdj" className="byc-img" />
          </div>
          <div className="byc-writeup">
            <div className="byc-writeup-div">HYDE PARK</div>
            <div>
              <h6 className="byc-h6">
                The beautiful 350-acre Hyde Park is on your doorstep. This is
                the largest of four Royal Parks in central London, a place where
                many threads of the capital’s history meet. A green oasis in the
                heart of the city, Hyde Park is home to over 4,000 trees, a
                sizable lake, ornamental flower gardens, as well as numerous
                buildings and monuments of interest. It’s a wonderful place to
                walk, exercise or meditate. Rowing or boating are available in
                the 18th-century Serpentine, London’s largest boating lake.
              </h6>
            </div>
          </div>
        </div>
        <div className="next-video-div">
          <video autoPlay muted className="m-vid">
            <source
              src="https://media.istockphoto.com/id/1356454236/video/young-woman-dancing-at-home.mp4?s=mp4-640x640-is&k=20&c=ph4IqvcVhNoBaN2u8O7OVfvM-WYTpMb5xdd-8AL6efI="
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mayfair-display-div">
          <div className="myf-div">
            <div style={{ color: "gray" }}>MAYFAIR</div>
            <div>
              <h6 className="myf-h6">
                Bordering Hyde Park, Mayfair is an historic, upscale district of
                elegant Georgian townhouses, exclusive hotels and restaurants,
                waiting for you to enjoy. Mayfair’s world-famous retailers
                include the bespoke tailors of Savile Row and luxury
                international fashion houses on Bond Street. With 285 acres, 144
                streets, 26 Michelin Stars and 5,200 residents, it’s the epitome
                of taste, fashion and luxury.
              </h6>
            </div>
          </div>
          <div className="jde">
            <img src={redy} alt="bc" className="jde-img" />
          </div>
        </div>
      </div>
      <hr />
      {/* <Hover /> */}
      {/* <div className="st-div"></div> */}
    </div>
  );
};

export default Neighbours;
