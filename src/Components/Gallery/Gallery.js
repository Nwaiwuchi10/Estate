import React from "react";
import "./Gallery.css";
import nse from "../../assets/images/nse.jpg";
import { Container } from "react-bootstrap";
const Gallery = () => {
  return (
    <div className="gallery-div">
      <div className="div-displ">
        <div className="div-im">
          <img src={nse} alt="kjd" className="img-gel" />
        </div>
        <div className="limit-div">
          <h2> Limitless living in a 21st century ICON</h2>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
