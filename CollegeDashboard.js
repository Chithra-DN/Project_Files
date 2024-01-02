import React from "react";

import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import "./CollegeDashboard.css";
import Logout from "../Logout/Logout";
import RegisterStudent from "./RegisterStudent";
import ViewStudents from "./ViewStudents";
import LoanStatus from "./LoanStatus";
import { useEffect } from "react";
import CollegeService from "../Service/CollegeService";

const { TabPane } = Tabs;

const styles = {
  wrap: {
    fontFamily: "sans-serif",
  },
};

const CollegeDashboard = (props) => {
  const { state } = useLocation();
  const [tab, setTab] = React.useState("tab-loan");
  const { collegeHandle } = state;

  const onChange = (key) => {
    console.log(key);
    setTab(key);
  };

  return (
    <div className="clgbg">
    <div className="college-dash">
      <div className="college-header">
        <p className="header-welcome">
          {`Welcome ${collegeHandle.username} !`}{" "}
        </p>
        <Logout />
      </div>
      <div style={styles.wrap} className="college-tabs-div">
        <Tabs className="college-tabs" type="card" onChange={onChange}>

          <TabPane tab="Register Student" key="tab-student">
            <RegisterStudent tab={tab} collegeId={collegeHandle.collegeId} />
          </TabPane>

          <TabPane tab="View Students" key="tab-view-students">
            <ViewStudents
              tab={tab}
              collegeId={collegeHandle.collegeId}
            ></ViewStudents>
          </TabPane>


          <TabPane tab="Loan Dashboard" key="tab-view-loans">
            <LoanStatus
              tab={tab}
              collegeId={collegeHandle.collegeId}
            ></LoanStatus>
          </TabPane>

          
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default CollegeDashboard;
