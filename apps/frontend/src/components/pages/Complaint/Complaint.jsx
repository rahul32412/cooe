import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import ComplaintForm from "./Complaint-components/ComplaintForm";
import popup from "../../layout/elements/popup/Popup";
import FaqAccordion from "../../layout/elements/Accordion/accordion";

const ComplaintListNavItem = ({
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
export default function Complaint() {
  const [popState, setpopState] = useState(false);
  const openPopup = () => {
    setpopState(true);
  };
  const closePopup = () => {
    setpopState(false);
  };
  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="Complaint-container">
      <div className="Header">
        <div className="div1">
          <button className="button" onClick={handleClick}>
            <FaArrowLeft style={{ backgroundColor: "#2692be" }} />
          </button>
        </div>
        <div className="div2">
          <h3>Complaint & Suggestions</h3>
        </div>
      </div>
      <button onClick={openPopup} className="compose">
        +
      </button>
      <popup popState={popState} closePopup={closePopup}>
        <ComplaintForm popState={popState} closePopup={closePopup} />
      </popup>
      <div className="OrderList-Accordion">
      <ComplaintListNavItem
          orderId={"#dFhxvP7rY5ddfXPCQ"}
          time={"8:40pm"}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Oacc1"
          content={"this is some content"}
        />
        <ComplaintListNavItem
          orderId={"#dFhxvP7rY5ddfXPCQ"}
          time={"8:37pm"}
          toggleId={toggleId}
          setToggleId={setToggleId}
          accordionId="Oacc2"
          content={"this is some content"}
        />
        <ComplaintListNavItem
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
}
