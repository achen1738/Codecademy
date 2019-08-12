import { GET_COURSES, GET_AUTHORS } from "./actionTypes";

export const getCourses = () => {
  return {
    type: GET_COURSES.ACTION
  };
};

export const getAuthors = () => {
  return {
    type: GET_AUTHORS.ACTION
  };
};
