import React from "react";
import "./Cards.scss";
import Card from "../Card";
import { CSSTransition } from "react-transition-group";

const Cards = props => {
  let { activeTag } = props;
  const renderCards = () => {
    return props.courses.map((course, index) => {
      return (
        <CSSTransition
          in={!activeTag || course.tags.includes(activeTag)}
          classNames="dashboard__card-transition"
          timeout={100}
          key={index}
        >
          <Card
            course={course}
            activeTag={props.activeTag}
            authors={props.authors}
          />
        </CSSTransition>
      );
    });
  };

  return <div className="dashboard__cards">{renderCards()}</div>;
};

export default Cards;
