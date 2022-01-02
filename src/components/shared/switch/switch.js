import React from "react";
import "./switch.scss";

const Switch = ({ isOn, handleToggle, onColor, customClass }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={`react-switch-checkbox ${customClass}`}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
