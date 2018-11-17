import api from "../services/config";

const STATUS_OK = 200;

const fetchData = (url, method = "GET") =>
  fetch(url, { method, headers: setAuthHeaders() })
    .then(verifyResponse)
    .catch(handleErrors);

const verifyResponse = res => {
  if (!res || res.status !== STATUS_OK) {
    console.log(`error fetching - status: ${res.status}`);
    return res.status;
  }
  return res.json();
};

const handleErrors = error => console.error(error);

const setAuthHeaders = () => {
  const { username, password } = api;
  const headers = new Headers();
  headers.set(
    "Authorization",
    `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`
  );
  return headers;
};

export { fetchData };
