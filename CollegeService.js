import axios from "axios";

const CLG_BASE_URL_POST = "http://localhost:8081/college/add";
const CLG_BASE_URL_POST_STUDENT = "http://localhost:8081/college/student/add/";
const CLG_BASE_URL_GET = "http://localhost:8081/college/all";
const CLG_BASE_URL_GET_ALL_STUDENTS = "http://localhost:8081/college/students";
const CLG_BASE_URL_GET_FIND = "http://localhost:8081/college/search";

class CollegeService {
  getAll() {
    return axios.get(CLG_BASE_URL_GET);
  }

  getAllStudentsById(clgId) {
    return axios.get(`${CLG_BASE_URL_GET_ALL_STUDENTS}/${clgId}`);
  }

  get(collegeId) {
    return axios.get(`${CLG_BASE_URL_GET_FIND}/${collegeId}`);
  }

  save(body) {
    return axios.post(CLG_BASE_URL_POST, body);
  }

  saveStudent(clgId, data) {
    return axios.post(`${CLG_BASE_URL_POST_STUDENT}${clgId}`, data);
  }
}

export default new CollegeService();
