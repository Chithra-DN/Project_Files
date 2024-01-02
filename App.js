import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import BankDashboard from "./BankDashboard/BankDashboard";
import CollegeDashboard from "./CollegeDashboard/CollegeDashboard";
import StudentDashboard from "./StudentDashboard/StudentDashboard";
import Auth from "./Auth/Auth";
import HomePage from "./HomePage";
import About from "./About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<App />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/bank" element={<BankDashboard />} />
          <Route path="/college" element={<CollegeDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
