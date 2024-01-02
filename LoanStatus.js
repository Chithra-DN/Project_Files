import React, { useState, useEffect } from "react";
import { Button } from "antd";
import LoanApplicationService from "../Service/LoanApplicationService";
import "./LoanStatus.css";
import ViewLoanApplication from "./ViewLoanApplication";

const LoanStatus = (props) => {
  const [applications, setApplications] = useState([]);
  const [loanApplication, setLoanApplication] = useState({});
  const [loanSelected, setLoanSelected] = useState(false);

  useEffect(() => {
    console.log("Render loan status. Student Id = " + props.studentId);
    LoanApplicationService.getAllByStudentId(props.studentId).then(
      (response) => {
        setApplications(response.data);
      }
    );
    setLoanSelected(false);
  }, [props.tab]);

  const onSelect = (selectedLoan) => {
    console.log(selectedLoan);
    setLoanApplication(selectedLoan);
    setLoanSelected(true);
  };
  return (
    <div className="display-loanstatus-bg">
      <div className="display-loanstatus-container">
        {applications.map((loanApp) => (
          <LoanAppData
            key={loanApp.id}
            loanApp={loanApp}
            onSelect={onSelect}
          ></LoanAppData>
        ))}
      </div>
      <div className="display-loanstatus-application">
        {loanSelected && (
          <ViewLoanApplication
            key={loanApplication.id}
            loanApplication={loanApplication}
          ></ViewLoanApplication>
        )}
      </div>
    </div>
  );
};

const LoanAppData = ({ loanApp, onSelect }) => {
  return (
    <div className="loanApp-container">
      <div className="loanApp-id">
        <span className="loanApp-span-leftvalue">Application Id</span>
        <span className="loanApp-span-rightvalue">{loanApp.id} </span>
      </div>
      <div className="loanApp-name">
        <span className="loanApp-span-leftvalue">Loan Name</span>
        <span className="loanApp-span-rightvalue">{loanApp.loan.name} </span>
      </div>
      <div className="loanApp-amt">
        <span className="loanApp-span-leftvalue">Loan Amount</span>
        <span className="loanApp-span-rightvalue">{loanApp.loanAmt} ₹</span>
      </div>
      <div className="loanApp-interest">
        <span className="loanApp-span-leftvalue">
          Loan Intereset Rate (p.a)
        </span>
        <span className="loanApp-span-rightvalue">
          {loanApp.loan.interest} %{" "}
        </span>
      </div>
      <div className="loanApp-bank">
        <span className="loanApp-span-leftvalue">Bank</span>
        <span className="loanApp-span-rightvalue">
          {loanApp.loan.bank.name}{" "}
        </span>
      </div>
      <div className="loanApp-tenure">
        <span className="loanApp-span-leftvalue">Loan Tenure (years)</span>
        <span className="loanApp-span-rightvalue">{loanApp.tenure} </span>
      </div>
      <div className="loanApp-status">
        <span className="loanApp-span-leftvalue">Loan Status</span>
        <span className="loanApp-span-rightvalue">{loanApp.status} </span>
      </div>
      <div className="loanApp-view">
        <Button className="loanApp-view-btn" onClick={() => onSelect(loanApp)}>
          View Details
        </Button>
      </div>
    </div>
  );
};
export default LoanStatus;
