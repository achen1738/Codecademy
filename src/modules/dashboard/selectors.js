import { NAME } from "./constants";

export const getCoursesSelector = state => {
  const moduleName = NAME;
  const dashboardState = state[moduleName];
  if (!dashboardState) {
    return [];
  }

  return dashboardState.courses;
};

export const getAuthorsSelector = state => {
  const moduleName = NAME;
  const dashboardState = state[moduleName];
  if (!dashboardState) {
    return {};
  }

  return dashboardState.authors;
};

export const getTagsSelector = state => {
  const moduleName = NAME;
  const dashboardState = state[moduleName];
  if (!dashboardState) {
    return {};
  }

  return dashboardState.tags;
};
