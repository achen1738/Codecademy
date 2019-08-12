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
import PageWrapper from "../../components/PageWrapper";

class Dashboard extends Component {
  state = {
    activeTag: "",
    isDark: true
  };

  componentDidMount() {
    this.props.getCourses();
    this.props.getAuthors();
  }

  setActiveTag = tag => {
    this.setState({ activeTag: tag });
  };

  setDark = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <PageWrapper dark={this.state.isDark}>
        <div className="dashboard">
          <DashboardHeader isDark={this.state.isDark} setDark={this.setDark} />
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
      </PageWrapper>
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
