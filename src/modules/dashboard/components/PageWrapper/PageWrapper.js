import React from "react";

const PageWrapper = props => {
  return <div className={props.dark ? "dark" : "light"}>{props.children}</div>;
};

export default PageWrapper;
