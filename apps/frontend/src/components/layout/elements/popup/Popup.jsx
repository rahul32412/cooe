import React from "react";
import "./Popup.css";

function popup({ children, popState, closePopup }) {
  return (
    <>
      <div className={"popup " + (popState ? "open" : "")}>
        <div className="cover" onClick={closePopup}></div>
        <div className="popup-content">{children}</div>
      </div>
    </>
  );
}

export default popup;
