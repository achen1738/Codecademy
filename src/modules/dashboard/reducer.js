import { GET_AUTHORS, GET_COURSES } from "./actionTypes";

const initialState = {
  courses: [],
  authors: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHORS.SUCCESS:
      return Object.assign({}, state, {
        authors: action.authors
      });
    case GET_COURSES.SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.default
      });
    default:
      return state;
  }
}
