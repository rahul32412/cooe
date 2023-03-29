import React from "react";
import "./Form.css";
import {
  FaWallet,
  FaUserAlt,
  FaEnvelope,
  FaMobile,
  FaCreditCard,
} from "react-icons/fa";

const PaymentForm = ({ closePopup, amount }) => {
  return (
    <div className="payment-form-container">
      <div className="top">
        <span>FastPay Upi</span>
        <span className="amount">${amount}</span>
      </div>
      <hr />
      <form>
        <div className="form-item">
          <label htmlFor="name">
            <FaUserAlt />
          </label>
          <input
            id="name"
            type="text"
            className="values"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="mobile">
            <FaMobile />
          </label>
          <input
            id="mobile"
            type="tel"
            className="values"
            placeholder="Mobile number"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">
            <FaEnvelope />
          </label>
          <input
            id="email"
            type="email"
            className="values"
            placeholder="Email address"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="upi">
            <FaCreditCard />
          </label>
          <input
            id="upi"
            type="text"
            className="values"
            placeholder="UPI account details"
            required
          />
        </div>
        <div className="form-item payment-options-container">
          <label htmlFor="payment-options">Payment options</label>
          <select name="paymentOption" id="payment-options">
            <option value="Wings">Wings</option>
            <option value="FastPay UPI">FastPay UPI</option>
            <option value="EK">EK</option>
          </select>
        </div>
      </form>
      <div className="payment-actions">
        <button className="close-button" onClick={closePopup}>
          Cancel
        </button>
        <button className="submit-button" onClick={closePopup}>
          Submit
        </button>
      </div>
    </div>
  );
};

const InputForm = (props) => {
  const handleInputChange = (e) => {
    props.setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="formSubmit">
        <div className="inputContainer">
          <FaWallet className="walletIcon" />
          <input
            type="number"
            value={props.amount}
            placeholder="Please select a recharge amount"
            className="payIn"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export { InputForm, PaymentForm };
