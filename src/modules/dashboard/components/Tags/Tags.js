import React, { useState } from "react";
import "./Tags.scss";
import Search from "../Search/Search";
import Tag from "../Tag";

const Tags = props => {
  const [searchText, setSearchText] = useState("");
  const renderTags = () => {
    return Object.keys(props.tags)
      .sort()
      .map(tag => {
        return (
          <Tag
            key={tag}
            text={tag}
            searchText={searchText}
            number={props.tags[tag]}
            setActiveTag={props.setActiveTag}
            activeTag={props.activeTag}
          />
        );
      });
  };

  return (
    <div className="dashboard__tags">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <div className="dashboard__tags--container">{renderTags()}</div>
    </div>
  );
};

export default Tags;
