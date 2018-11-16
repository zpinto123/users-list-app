import api from "./config";
import { fetchData } from "../helpers";
const usersApi = {
  getAllUsers: () => fetchData(api.users.url('?fields=id,displayName,name,surname,email,employer'), "GET")
};

export default usersApi;
