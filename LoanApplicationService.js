import axios from "axios";

const LOAN_APPLICATION_BASE_URL_POST =
  "http://localhost:8081/loan-application/add";
const LOAN_APPLICATION_BASE_URL_GET_ALL =
  "http://localhost:8081/loan-application/all";
const LOAN_APPLICATION_BASE_URL_GET_ALL_BY_CLGID =
  "http://localhost:8081/loan-application/college";
const LOAN_APPLICATION_BASE_URL_GET_ALL_BY_BANKID =
  "http://localhost:8081/loan-application/bank";
const LOAN_APPLICATION_BASE_URL_GET_ALL_BY_STUDENTID =
  "http://localhost:8081/loan-application/student";

class LoanApplicationService {
  getAll() {
    return axios.get(LOAN_APPLICATION_BASE_URL_GET_ALL);
  }

  getAllByBankId(bankId) {
    return axios.get(
      `${LOAN_APPLICATION_BASE_URL_GET_ALL_BY_BANKID}/${bankId}`
    );
  }

  getAllByCollegeId(clgId) {
    return axios.get(`${LOAN_APPLICATION_BASE_URL_GET_ALL_BY_CLGID}/${clgId}`);
  }

  getAllByStudentId(studentId) {
    return axios.get(
      `${LOAN_APPLICATION_BASE_URL_GET_ALL_BY_STUDENTID}/${studentId}`
    );
  }

  save(body) {
    return axios.post(LOAN_APPLICATION_BASE_URL_POST, body);
  }
}

export default new LoanApplicationService();
