import axios from "axios";

const BANK_BASE_URL_POST = "http://localhost:8081/bank/add";
const BANK_BASE_URL_GETALL = "http://localhost:8081/bank/all";
const BANK_BASE_URL_GET = "http://localhost:8081/bank/search";

class BankService {
  getAll() {
    return axios.get(BANK_BASE_URL_GETALL);
  }

  get(bankId) {
    return axios.get(`${BANK_BASE_URL_GET}/${bankId}`);
  }

  save(body) {
    return axios.post(BANK_BASE_URL_POST, body);
  }
}

export default new BankService();
