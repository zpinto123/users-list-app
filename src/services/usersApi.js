import api from "./config";
import { fetchData } from "../helpers";
const usersApi = {
  getAllUsers: () => fetchData(api.users.url(), "GET")
};

export default usersApi;
