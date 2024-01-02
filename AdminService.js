import axios from "axios";

const ADMIN_BASE_URL_GET = "http://localhost:8081/admin/all";
const ADMIN_BASE_URL_POST = "http://localhost:8081/admin/add";

class AdminService {
  getAll() {
    return axios.get(ADMIN_BASE_URL_GET);
  }

  save(body) {
    return axios.post(ADMIN_BASE_URL_POST, body);
  }
}

export default new AdminService();

