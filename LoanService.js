import axios from "axios";

const LOAN_BASE_URL_POST = "http://localhost:8081/loan/add";
const LOAN_BASE_URL_GET = "http://localhost:8081/loan/all";
const LOAN_BASE_URL_GET_ALL_BY_BANKID = "http://localhost:8081/loan/bank";

class LoanService {
  getAll() {
    return axios.get(LOAN_BASE_URL_GET);
  }

  getAllByBankId(bankId) {
    return axios.get(`${LOAN_BASE_URL_GET_ALL_BY_BANKID}/${bankId}`);
  }

  save(body) {
    return axios.post(LOAN_BASE_URL_POST, body);
  }
}

export default new LoanService();
