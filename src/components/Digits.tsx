import React, { useState } from "react";

type DigitProp = {
  digit: string;
};

const Digits = ({ digit }: DigitProp) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleAnimationEnd = () => {
    setHovered(false);
  };

  return (
    <span
      className={`digit ${hovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onAnimationEnd={handleAnimationEnd}
    >
      {digit}
    </span>
  );
};

export default Digits;
