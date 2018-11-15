const api = {
  username: "admin",
  password: "district",
  base: "https://play.dhis2.org/2.30/api/",
  users: {
    url: () => getApiUrl("users.json")
  }
};

function getApiUrl(path) {
  return `${api.base}${path}`;
}

export default api;
