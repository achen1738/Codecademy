import { defineAction } from "redux-define";
import { NAME } from "./constants";
import { CANCELLED, ERROR, PENDING, SUCCESS } from "../app/stateConstants";

export const GET_COURSES = defineAction(
  "GET_COURSES",
  [CANCELLED, ERROR, PENDING, SUCCESS],
  NAME
);

export const GET_AUTHORS = defineAction(
  "GET_AUTHORS",
  [CANCELLED, ERROR, PENDING, SUCCESS],
  NAME
);
