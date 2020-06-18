import axios from "axios";

const authorEndpoint = "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json";

export const fetchAuthorData = () => {
  return axios.get(authorEndpoint);
};
