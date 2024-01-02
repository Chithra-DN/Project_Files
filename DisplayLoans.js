import React, { useState, useEffect } from "react";
import { Button } from "antd";
import LoanService from "../Service/LoanService";
import "./DisplayLoans.css";
import LoanApplication from "./LoanApplication";

const DisplayLoans = (props) => {
  const [loans, setLoans] = useState([]);
  const [educationLoan, setEducationLoan] = useState({});
  const [loanSelected, setLoanSelected] = useState(false);

  useEffect(() => {
    console.log("Render display loans");
    LoanService.getAll().then((response) => {
      setLoans(response.data);
    });
    setLoanSelected(false);
  }, [props.tab]);

  const onSelect = (loan) => {
    setEducationLoan(loan);
    setLoanSelected(true);
  };
  return (
    <div className="display-loans-bg">
      <div className="display-loans-container">
        {loans.map((loan) => (
          <LoanData key={loan.id} loan={loan} onSelect={onSelect}></LoanData>
        ))}
      </div>
      <div className="display-loan-application">
        {loanSelected && (
          <LoanApplication
            key={educationLoan.id}
            loan={educationLoan}
            student={props.student}
          ></LoanApplication>
        )}
      </div>
    </div>
  );
};

const LoanData = ({ loan, onSelect }) => {
  return (
    <div className="eloan-container">
      <div className="eloan-name">
        <span className="eloan-span-leftvalue">Name</span>
        <span className="eloan-span-rightvalue">{loan.name} </span>
      </div>
      <div className="eloan-interest">
        <span className="eloan-span-leftvalue">Interest Rate (p.a)</span>
        <span className="eloan-span-rightvalue">{loan.interest} %</span>
      </div>
      <div className="eloan-bank">
        <span className="eloan-span-leftvalue">Bank</span>
        <span className="eloan-span-rightvalue">{loan.bank.name} </span>
      </div>
      <div className="eloan-branch">
        <span className="eloan-span-leftvalue">Branch</span>
        <span className="eloan-span-rightvalue">{loan.bank.branch} </span>
      </div>
      <div className="eloan-city">
        <span className="eloan-span-leftvalue">City</span>
        <span className="eloan-span-rightvalue">{loan.bank.city} </span>
      </div>
      <div className="eloan-apply">
        <Button className="loan-apply-btn" onClick={() => onSelect(loan)}>
          Click here to apply
        </Button>
      </div>
    </div>
  );
};
export default DisplayLoans;
