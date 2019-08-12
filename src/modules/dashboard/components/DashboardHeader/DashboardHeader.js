import React from "react";
import { Codecademy } from "../../../../images/images";
import "./DashboardHeader.scss";
import Links from "../Links";

const DashboardHeader = props => {
  return (
    <div className="dashboard__header">
      <Codecademy />
      <div className="dashboard__header--separator" />
      <Links />
    </div>
  );
};

export default DashboardHeader;
