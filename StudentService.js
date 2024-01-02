import axios from "axios";

const STUDENT_BASE_URL_GET = "http://localhost:8081/student/all";
const STUDENT_BASE_URL_POST = "http://localhost:8081/student/add";

class StudentService {
  getAll() {
    return axios.get(STUDENT_BASE_URL_GET);
  }

  save(body) {
    return axios.post(STUDENT_BASE_URL_POST, body);
  }
}

export default new StudentService();
