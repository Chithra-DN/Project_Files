import React from "react";

import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import "./StudentDashboard.css";
import Logout from "../Logout/Logout";
import DisplayLoans from "./DisplayLoans";
import LoanStatus from "./LoanStatus";
import ViewProfile from "./ViewProfile";

const { TabPane } = Tabs;

const styles = {
  wrap: {
    fontFamily: "sans-serif",
  },
};

const StudentDashboard = (props) => {
  const { state } = useLocation();
  const [tab, setTab] = React.useState("tab-loan");
  const { studentHandle } = state;

  const onChange = (key) => {
    console.log(key);
    setTab(key);
  };

  return (
    <div className="stdbg">
    <div className="student-dash">
      <div className="student-header">
        <p className="header-welcome">
          {`Welcome ${studentHandle.username} !`}{" "}
        </p>
        <Logout />
      </div>
      <div style={styles.wrap} className="student-tabs-div">
        <Tabs className="student-tabs" type="card" onChange={onChange}>

          <TabPane tab="Profile" key="tab-student">
            <ViewProfile tab={tab} student={studentHandle} />
          </TabPane>
          

          <TabPane tab="Education Loans" key="tab-education-loans">
            <DisplayLoans tab={tab} student={studentHandle}></DisplayLoans>
          </TabPane>


          <TabPane tab="Loan Status" key="tab-view-loan-status">
            {/* <RegisterCollege /> */}
            <LoanStatus tab={tab} studentId={studentHandle.id}></LoanStatus>
          </TabPane>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default StudentDashboard;
