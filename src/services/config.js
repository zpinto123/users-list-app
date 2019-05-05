// On a production app, i would keep these configurations on the .env file
const api = {
  username: "admin",
  password: "district",
  base: "https://play.dhis2.org/2.30/api/",
  users: {
    url: queryString => getApiUrl(`users.json${queryString}`)
  }
};

function getApiUrl(path) {
  return `${api.base}${path}`;
}

export default api;
