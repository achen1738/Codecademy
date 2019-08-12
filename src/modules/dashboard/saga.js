import { put, takeEvery, call } from "redux-saga/effects";
import { GET_COURSES, GET_AUTHORS } from "./actionTypes";
import * as courses from "../../mock/courses";
import { fetchAuthorData } from "../../services/codecademyAPI";

export function* saga() {
  yield takeEvery(GET_COURSES.ACTION, getCourses);
  yield takeEvery(GET_AUTHORS.ACTION, getCourses);
}

export function* getCourses(action) {
  try {
    yield put({ type: GET_COURSES.PENDING });
    yield put({ type: GET_COURSES.SUCCESS, courses });
  } catch (error) {
    yield put({
      type: GET_COURSES.ERROR
    });
  }
}

export function* getAuthors(action) {
  try {
    yield put({ type: GET_AUTHORS.PENDING });
    const authors = yield call(fetchAuthorData);
    yield put({ type: GET_AUTHORS.SUCCESS, authors });
  } catch (error) {
    yield put({
      type: GET_AUTHORS.ERROR
    });
  }
}
