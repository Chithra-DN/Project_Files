import axios from "axios";

const COLLEGE_HANDLE_BASE_URL_GET = "http://localhost:8081/college/handle/all";

class CollegeHandleService {
  getAll() {
    return axios.get(COLLEGE_HANDLE_BASE_URL_GET);
  }
}

export default new CollegeHandleService();
