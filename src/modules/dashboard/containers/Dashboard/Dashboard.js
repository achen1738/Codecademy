import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../actions";
import {
  getCoursesSelector,
  getAuthorsSelector,
  getTagsSelector
} from "../../selectors";
import DashboardHeader from "../../components/DashboardHeader";
import Tags from "../../components/Tags";
import Cards from "../../components/Cards";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    activeTag: ""
  };

  componentDidMount() {
    this.props.getCourses();
    this.props.getAuthors();
  }

  setActiveTag = tag => {
    this.setState({ activeTag: tag });
  };

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader />
        <Tags
          activeTag={this.state.activeTag}
          setActiveTag={this.setActiveTag}
          tags={this.props.tags}
        />
        <Cards
          courses={this.props.courses}
          authors={this.props.authors}
          activeTag={this.state.activeTag}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: getCoursesSelector(state),
    authors: getAuthorsSelector(state),
    tags: getTagsSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { getCourses, getAuthors }
)(Dashboard);
