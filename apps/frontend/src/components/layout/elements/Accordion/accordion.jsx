import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./accordion.css";

function FaqAccordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    if (isOpen) {
      setIsOpen(false);
      props.setToggleId("");
    } else {
      setIsOpen(true);
      props.setToggleId(props.accordionId);
    }
  };

  useEffect(() => {
    if (props.toggleId !== props.accordionId) {
      setIsOpen(false);
    }
  }, [props.toggleId, props.accordionId]);

  return (
    <div className="faq-accordion">
      <div className="faq-accordion-item">
        <div className="faq-accordion-title" onClick={handleAccordionClick}>
          {props.title}
          {props.children && (!isOpen ? <FaAngleDown /> : <FaAngleUp />)}
        </div>

        {props.children && (
          <div className={`faq-accordion-content ${isOpen ? "open" : ""}`}>
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqAccordion;
