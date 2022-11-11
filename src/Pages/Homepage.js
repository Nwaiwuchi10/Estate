import React from "react";
import FifthComp from "../Components/Gallery/FifthComp";
import Gallery from "../Components/Gallery/Gallery";
import Gallery2 from "../Components/Gallery/Gallery2";
import Gel from "../Components/Gallery/Gel";
import HeaderHero from "../Components/Hero/HeaderHero";
import PersistentDrawerRight from "../Components/NavBar/NavBars";

const Homepage = () => {
  return (
    <div>
      <PersistentDrawerRight />
      <HeaderHero />
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <Gallery />
        <Gallery2 />
        <Gel />
        <FifthComp />
      </div>
    </div>
  );
};

export default Homepage;
