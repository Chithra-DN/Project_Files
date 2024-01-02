import React from "react";

import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import "./BankDashboard.css";
import Logout from "../Logout/Logout";
import RegisterLoan from "./RegisterLoan";
import ViewLoans from "./ViewLoans";
import LoanStatus from "./LoanStatus";

const { TabPane } = Tabs;

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    // padding: "2rem",
  },
};

const BankDashboard = (props) => {
  const { state } = useLocation();
  const [tab, setTab] = React.useState("tab-loan-app");
  const { bankuser } = state;

  const onChange = (key) => {
    console.log(key);
    setTab(key);
  };

  return (
    <div className="bankbg">
    <div className="bank-dash">
      <div className="bank-header">
        <p className="header-welcome">{`Welcome ${bankuser.username} !`} </p>
        <Logout />
      </div>
      <div style={styles.wrap} className="bank-tabs-div">
        <Tabs className="bank-tabs" type="card" onChange={onChange}>

          <TabPane tab="Add New Loan" key="tab-loan">
            <RegisterLoan tab={tab} bankId={bankuser.bankId} />
          </TabPane>

          <TabPane tab="View Loans" key="tab-view-loan">
            <ViewLoans tab={tab} bankId={bankuser.bankId}></ViewLoans>
          </TabPane>

          <TabPane tab="Loan Applications" key="tab-loan-app">
            <LoanStatus tab={tab} bankId={bankuser.bankId}></LoanStatus>
          </TabPane>
          
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default BankDashboard;
