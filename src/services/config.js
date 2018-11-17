const api = {
  username: process.env.REACT_APP_API_USERNAME,
  password: process.env.REACT_APP_API_PASSWORD,
  base: process.env.REACT_APP_API_URL,
  users: {
    url: queryString => getApiUrl(`users.json${queryString}`)
  }
};

function getApiUrl(path) {
  return `${api.base}${path}`;
}

export default api;
