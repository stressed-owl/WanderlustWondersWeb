import axios from "axios";

/* The code is creating an instance of the Axios library with a specific base URL. */
const instance = axios.create({
  baseURL: "http://localhost:3002",
});

export default instance;
