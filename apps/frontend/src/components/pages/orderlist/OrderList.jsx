import React from "react";
import FaqAccordion from "../../layout/elements/Accordion/accordion";
import "./OrderList.css";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const OrderListNavItem = ({
    orderId,
    time,
    toggleId,
    setToggleId,
    accordionId,
    content,
  }) => {
    const title = (
      <div className="profile-nav-item-title">
        <span>{orderId}</span>
        <span>{time}</span>
      </div>
    );
    return (
      <FaqAccordion
        accordionId={accordionId}
        setToggleId={setToggleId}
        toggleId={toggleId}
        title={title}
      >
        {content}
      </FaqAccordion>
    );
  };
  
const OrderList = () => {
  const [toggleId, setToggleId] = useState("");
  const handleOrderListClick = () => {
    window.history.back();
  };

  return (
    <div className="orderList-Container">
      <div className="orderList-Header">
        <div className="orderList-div1">
          <button className="orderList-button" onClick={handleOrderListClick}>
            <FaArrowLeft style={{ backgroundColor: "#2692be" }} />
          </button>
        </div>
        <div className="orderList-div2">
          <h3>Orders</h3>
        </div>
      </div>
      <div className="OrderList-Accordion">
      <OrderListNavItem
          orderId={"#dFhxvP7rY5ddfXPCQ"}
          time={"8:40pm"}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Oacc1"
          content={"this is some content"}
        />
        <OrderListNavItem
          orderId={"#dFhxvP7rY5ddfXPCQ"}
          time={"8:37pm"}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Oacc2"
          content={"this is some content"}
        />
        <OrderListNavItem
          orderId={"#dFhxvP7rY5ddfXPCQ"}
          time={"8:40pm"}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Oacc3"
          content={"this is some content"}
        />

      </div>
    </div>
  );
};

export default OrderList;
