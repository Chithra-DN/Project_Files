import axios from "axios";

const BANK_HANDLE_BASE_URL_GET = "http://localhost:8081/bank/handle/all";

class BankHandleService {
  getAll() {
    return axios.get(BANK_HANDLE_BASE_URL_GET);
  }
}

export default new BankHandleService();
