import React from "react";
import "./Link.scss";

const Link = props => {
  return (
    <div className="dashboard__link">
      <a href={props.url}>{props.text}</a>
    </div>
  );
};

export default Link;
