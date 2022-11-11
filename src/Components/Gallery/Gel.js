import React from "react";
import "./Gel.css";
import bigo from "../../assets/images/bigo.jpg";
import { Container, Image } from "react-bootstrap";
const Gel = () => {
  return (
    <div className="gel-div">
      <div>
        <h3 className="text-center">
          Panoramic views of Europe’s greatest city park
        </h3>
        <div className="div-img-div">
          <Image src={bigo} alt="jdn" className="imge-gel" />
        </div>
      </div>
    </div>
  );
};

export default Gel;
