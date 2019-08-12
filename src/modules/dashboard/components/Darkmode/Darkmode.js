import React, { useState } from "react";
import { FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import "./Darkmode.scss";

const Darkmode = props => {
  let { isDark, setDark } = props;

  let textValue = "Dark";
  let borderStyle = "dashboard__header--dark-label-dark";
  let icon = <FiMoon className="dashboard__header--sun" />;
  if (!isDark) {
    textValue = "Light";
    borderStyle = "dashboard__header--dark-label-light";
    icon = <FiSun className="dashboard__header--sun" />;
  }

  return (
    <div className="dashboard__header--dark">
      {icon}
      <span className="dashboard__header--dark-text">{textValue}</span>
      <div
        onClick={() => setDark(!isDark)}
        className="dashboard__header--dark-toggle"
      >
        <input
          checked={isDark}
          type="checkbox"
          className="dashboard__header--dark-checkbox"
          onChange={() => {}}
        />
        <label className={borderStyle} />
        <div className="dashboard__header--dark-checkbox-circle" />
      </div>
    </div>
  );
};

export default Darkmode;
