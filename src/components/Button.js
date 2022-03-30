import React from "react";

const Button = ({ handleClick, color, text }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgorundColor: color }}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
