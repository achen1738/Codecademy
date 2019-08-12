import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../actions";
import { getCoursesSelector, getAuthorsSelector } from "../../selectors";
import DashboardHeader from "../../components/DashboardHeader";
import Tags from "../../components/Tags";
import Cards from "../../components/Cards";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.props.getCourses();
    // this.props.getAuthors();
  }

  render() {
    console.log(this.props);
    return (
      <div className="dashboard">
        <DashboardHeader />
        <Tags />
        <Cards />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: getCoursesSelector(state),
    authors: getAuthorsSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { getCourses, getAuthors }
)(Dashboard);
