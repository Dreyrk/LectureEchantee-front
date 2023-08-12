function getAPIUrl() {
  if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_PROD_URL;
  }
  return "http://localhost:5000/api";
}

export default getAPIUrl;
