import { all } from "redux-saga/effects";
import { saga as dashboardSaga } from "../dashboard/saga";
export default function* saga() {
  yield all([dashboardSaga()]);
}
