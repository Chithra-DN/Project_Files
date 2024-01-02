import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../Service/AdminService";
import BankHandleService from "../Service/BankHandleService";
import CollegeHandleService from "../Service/CollegeHandleService";
import StudentService from "../Service/StudentService";
import { Select } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "../HomePage.css";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState();

  const [adminRecords, setAdminRecords] = React.useState([]);
  const [bankRecords, setBankRecords] = React.useState([]);
  const [collegeRecords, setCollegeRecords] = React.useState([]);
  const [studentRecords, setStudentRecords] = React.useState([]);

  const [profile, setProfile] = React.useState(3);
  const selectOptions = [
    { value: 0, label: "Admin" },
    { value: 1, label: "Bank" },
    { value: 2, label: "College" },
    { value: 3, label: "Student" },
  ];
  const navigate = useNavigate();

  // get users record for each of the profile
  useEffect(() => {
    AdminService.getAll().then((response) => {
      setAdminRecords(response.data);
      console.log("Admin Data = " + JSON.stringify(response.data));
    });
  }, []);

  useEffect(() => {
    BankHandleService.getAll().then((response) => {
      setBankRecords(response.data);
      console.log("Bank handle data = " + JSON.stringify(response.data));
    });
  }, []);

  useEffect(() => {
    CollegeHandleService.getAll().then((response) => {
      setCollegeRecords(response.data);
      console.log("College handle data = " + JSON.stringify(response.data));
    });
  }, []);

  useEffect(() => {
    StudentService.getAll().then((response) => {
      setStudentRecords(response.data);
      console.log("Student handle data = " + JSON.stringify(response.data));
      console.log(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    debugger;
    let account = {};
    let profilename = "";
    if (profile === 0) {
      console.log("Profile Admin");
      profilename = "Admin";
      account = adminRecords.find((user) => user.username === username);
    } else if (profile === 1) {
      console.log("Profile Bank");
      profilename = "Bank";
      account = bankRecords.find((user) => user.username === username);
    } else if (profile === 2) {
      console.log("Profile College");
      profilename = "College";
      account = collegeRecords.find((user) => user.username === username);
    } else {
      console.log("Profile Student");
      profilename = "Student";
      account = studentRecords.find((user) => user.username === username);
    }

    if (account && account.password === password) {
      console.log("Valid User." + JSON.stringify(account, null, 2));
      setError(null);
      alert(`Hello ${account.username}. Profile ${profilename}`);
    } else {
      setError("Invalid Username or Password!");
      return;
    }

    if (profile === 0) {
      navigate("/admin", { state: { adminuser: account.username } });
    } else if (profile === 1) {
      navigate("/bank", { state: { bankuser: account } });
    } else if (profile === 2) {
      navigate("/college", { state: { collegeHandle: account } });
    } else {
      navigate("/student", { state: { studentHandle: account } });
    }
  };

  console.log(username);
  console.log(password);
  console.log(profile);

  return (
    <div className="bg-image1">
      <div className="loginPage">
        <form className="login-form-container" onSubmit={handleSubmit}>
          <div className="login-form-content">
            <h2 className="login-title">Sign In</h2>
            <div className="text-centre">
              Not registered yet ?
              <span className="link-primary" onClick={props.changeAuthMode}>
                {" "}
                Sign up Admin
              </span>
            </div>
            <div className="form-username">
              <span className="username-span">UserName</span>
              <input
                data-testid="login-user"
                className="form-control"
                placeholder="Enter Username"
                type="text"
                name="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                pattern="[A-Za-z\s]*"
                title="Username should contain alphabets only!"
              />
            </div>
            <div className="separator"></div>
            <div className="form-password">
              <span className="password-span">Password</span>
              <input
      data-testid="login-pass"
      className="form-control"
      type="password"
      placeholder="Enter Password"
      name="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      pattern="^(?=.*[A-Za-z]{3,})(?=.*\d{3,}).*$"
      title="Password must contain at least 3 alphabets and 3 digits!"
      required
    />
            </div>
            <div className="form-profile">
              <span className="profile-span">Select Profile</span>
              <Select
                className="form-select"
                defaultValue="Student"
                onChange={(val) => setProfile(val)}
                options={selectOptions}
                required
              />
            </div>
            {error ? <div className="loginError">{error}</div> : null}
            <div className="form-submit d-flex gap-3">
              <button
                data-testid="login-submit"
                type="submit"
                className="login-submit-button"
              >
                Submit
              </button>
              <Link
                data-testid="login-submit"
                type="submit"
                className="login-back-button"
                to={"/"}
              >
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
