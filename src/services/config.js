const api = {
  username: process.env.REACT_APP_API_USERNAME,
  password: process.env.REACT_APP_API_PASSWORD,
  base: "https://play.dhis2.org/2.30/api/",
  users: {
    url: queryString => getApiUrl(`users.json${queryString}`)
  }
};

function getApiUrl(path) {
  return `${api.base}${path}`;
}

export default api;
