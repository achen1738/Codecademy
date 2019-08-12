import React, { useState } from "react";
import "./Card.scss";

const Card = props => {
  let { course, authors, activeTag } = props;
  const [authorExpanded, setAuthorExpanded] = useState(false);

  if (activeTag && !course.tags.includes(activeTag)) {
    return null;
  }

  let authorValue = course.author_id;
  if (authors[authorValue]) authorValue = authors[authorValue].name;
  const renderAuthorBio = () => {
    if (authors[course.author_id]) {
      setAuthorExpanded(!authorExpanded);
    }
  };

  return (
    <div className="dashboard__card">
      <div className="dashboard__card--header">
        <div className="dashboard__card--image">
          <img src={course.image} alt="course" />
        </div>
        <div className="dashboard__card--header-text">
          <div onClick={renderAuthorBio} className="dashboard__card--author">
            <span>{"Written by "}</span>
            <span className="dashboard__card--author-text">{authorValue}</span>
          </div>
          <div className="dashboard__card--title">{course.title}</div>
        </div>
      </div>
      <div className="dashboard__card--body">
        {authorExpanded ? authors[course.author_id].bio : course.description}
      </div>
    </div>
  );
};

export default Card;
