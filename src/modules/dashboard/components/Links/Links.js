import React from "react";
import "./Links.scss";
import Link from "../Link";

const Links = props => {
  return (
    <div className="dashboard__links">
      <Link url="/" text="Catalog" />
    </div>
  );
};

export default Links;
