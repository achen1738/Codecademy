import React from "react";
import { Codecademy } from "../../../../images/images";
import "./DashboardHeader.scss";
import Links from "../Links";
import Darkmode from "../Darkmode";

const DashboardHeader = props => {
  return (
    <div className="dashboard__header">
      <div className="dashboard__header--left">
        <Codecademy />
        <div className="dashboard__header--separator-links" />
        <Links />
      </div>
      <div className="dashboard__header--right">
        <Darkmode isDark={props.isDark} setDark={props.setDark} />
      </div>
    </div>
  );
};

export default DashboardHeader;
