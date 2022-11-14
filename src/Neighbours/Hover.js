import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Neighbours/Neighbours.css";
import { MdOutlineKeyboard } from "react-icons/md";
const Hover = () => {
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    setIsHovering(true);
  }, []);

  //   const handleMouseOver = () => {
  //     setIsHovering(true);
  //   };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div>
        <div>
          <div type="button" onMouseOut={handleMouseOut}></div>

          {isHovering && (
            <div className="st-div">
              <Link to="/home">
                <MdOutlineKeyboard />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hover;
