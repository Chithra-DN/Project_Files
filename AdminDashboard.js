import React from "react";

import { Tabs } from "antd";
import RegisterBank from "./RegisterBank";
import { useLocation } from "react-router-dom";
import "./AdminDashboard.css";
import RegisterCollege from "./RegisterCollege";
import Logout from "../Logout/Logout";

const { TabPane } = Tabs;

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: "2rem",
  },
};

const AdminDashboard = (props) => {
  const { state } = useLocation();
  const { adminuser } = state;
  const [tab, setTab] = React.useState("tab-bank");

  const onChange = (key) => {
    console.log(key);
    setTab(key);
  };

  return (
    <div className="admindashbg">
    <div className="admin-dash">
      <div className="admin-header">
        <p className="header-welcome">{`Welcome ${adminuser} !`} </p>
        <Logout />
      </div>
      <div style={styles.wrap} className="admin-tabs-div">
        <Tabs className="admin-tabs" type="card" onChange={onChange}>
          <TabPane tab="Register Bank" key="tab-bank">
            <RegisterBank tab={tab} />
          </TabPane>
          <TabPane tab="Register College" key="tab-college">
            <RegisterCollege tab={tab} />
          </TabPane>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
