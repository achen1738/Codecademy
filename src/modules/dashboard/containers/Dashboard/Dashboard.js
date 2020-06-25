import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCourses, getAuthors } from "../../actions";
import { getCoursesSelector, getAuthorsSelector, getTagsSelector } from "../../selectors";
import DashboardHeader from "../../components/DashboardHeader";
import Tags from "../../components/Tags";
import Cards from "../../components/Cards";
import "./Dashboard.scss";
import PageWrapper from "../../components/PageWrapper";
import axios from "axios";

const Dashboard = (props) => {
  const [activeTag, setActiveTag] = useState("");
  const [isDark, setIsDark] = useState(true);
  const { getCourses, getAuthors } = props;

  useEffect(() => {
    getCourses();
    getAuthors();
  }, [getCourses, getAuthors]);

  useEffect(() => {
    test();
  }, []);

  const [authors, setAuthors] = useState({});

  const test = async () => {
    console.log("HUR");
    const data = await axios.get("http://localhost:5000/api/course");
    console.log(data);
  };

  props.courses.forEach((course) => {
    console.log(authors);
    console.log(authors[course.author_id]);
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     console.log(users);
  //     if (users.data.length > 0) {
  //       console.log("I have an array");
  //       let newCourses = [];
  //       props.courses.forEach((course, index) => {
  //         const user = users.data[index];
  //         let newCourse = {
  //           ...course,
  //           description: user.company.catchPhrase,
  //           title: user.company.name,
  //         };
  //         newCourses.push(newCourse);
  //       });

  //       console.log(newCourses);
  //       setRealCourses(newCourses);
  //     } else {
  //       console.log("I dont have an array");
  //     }
  //   };

  //   fetchData();
  // }, [props.courses]);

  const setDark = () => {
    setIsDark(!isDark);
  };

  return (
    <PageWrapper dark={isDark}>
      <div className="dashboard">
        <DashboardHeader isDark={isDark} setDark={setDark} />
        <Tags activeTag={activeTag} setActiveTag={setActiveTag} tags={props.tags} />
        <Cards courses={props.courses} authors={authors} activeTag={activeTag} />
      </div>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: getCoursesSelector(state),
    authors: getAuthorsSelector(state),
    tags: getTagsSelector(state),
  };
};

export default connect(mapStateToProps, { getCourses, getAuthors })(Dashboard);
