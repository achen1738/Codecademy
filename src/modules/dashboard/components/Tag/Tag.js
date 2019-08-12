import React from "react";
import "./Tag.scss";

const Tag = props => {
  const handleClick = () => {
    if (props.activeTag === props.text) {
      props.setActiveTag("");
    } else {
      props.setActiveTag(props.text);
    }
  };

  let tagStyle = "dashboard__tags--tag";
  if (props.activeTag === props.text) {
    tagStyle += " dashboard__tags--tag-active";
  }

  if (!props.text.includes(props.searchText) && props.searchText) {
    return null;
  }

  return (
    <div onClick={handleClick} className={tagStyle}>
      <div className="dashboard__tags--tag-container">
        <span>{props.text}</span>
        <span className="dashboard__tags--tag-separator">|</span>
        <span>{props.number}</span>
      </div>
    </div>
  );
};

export default Tag;
