import React, { useState } from "react";
import { InputForm, PaymentForm } from "./components/Form";
import Button from "./components/Buttons";
import Popup from "../../layout/elements/popup/Popup";
import { FaArrowLeft, FaExclamation } from "react-icons/fa";
import "./Recharge.css";
function Recharge() {
  const handleClick = () => {
    window.history.back();
  };
  const openPopup = () => {
    setpopState(true);
  };
  const closePopup = () => {
    setpopState(false);
  };
  const [popState, setpopState] = useState(false);
  const [amount, setAmount] = useState("");
  return (
    <div className="recharge-page">
      <div className="Header">
        <div className="div1">
          <button className="backButton" onClick={handleClick}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="div2">
          <h3 className="rechargeH">Recharge</h3>
        </div>
      </div>
      <div className="warning">
        <div className="left">
          <FaExclamation />
        </div>
        <div className="right">
          <span>
            Note: If the recharge amount is deducted but the amount is not added
            to the account, please send a detailed screenshot of the payment and
            the game ID to the mailbox for processing.
          </span>
        </div>
      </div>
      <h3 className="balance">Balance: $0.00</h3>
      <div style={{ paddingBottom: "0", marginBottom: "0" }}>
        <InputForm amount={amount} setAmount={setAmount} />
      </div>
      <div>
        <Button setAmount={setAmount} />
      </div>
      <div>
        <Popup popState={popState} closePopup={closePopup}>
          <PaymentForm closePopup={closePopup} amount={amount} />
        </Popup>
        <button className="RechargeButton" onClick={openPopup}>
          Recharge
        </button>
      </div>
    </div>
  );
}

export default Recharge;
