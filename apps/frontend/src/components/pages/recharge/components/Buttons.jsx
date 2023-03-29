import React from "react";
import "./Buttons.css";

const Button = ({ setAmount }) => {
  const handleButtonClick = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="buttons-container">
      <button className="button" value="100" onClick={handleButtonClick}>
        $100
      </button>
      <button className="button" value="200" onClick={handleButtonClick}>
        $200
      </button>
      <button className="button" value="500" onClick={handleButtonClick}>
        $500
      </button>
      <button className="button" value="1000" onClick={handleButtonClick}>
        $1000
      </button>
      <button className="button" value="2000" onClick={handleButtonClick}>
        $2000
      </button>
      <button className="button" value="5000" onClick={handleButtonClick}>
        $5000
      </button>
      <button className="button" value="10000" onClick={handleButtonClick}>
        $10000
      </button>
      <button className="button" value="20000" onClick={handleButtonClick}>
        $20000
      </button>
    </div>
  );
};

export default Button;
