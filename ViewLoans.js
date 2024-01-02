import React, { useState, useEffect } from "react";
import LoanService from "../Service/LoanService";
import "./ViewLoans.css";

const ViewLoans = (props) => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    console.log("Render View Loans under bank");
    LoanService.getAllByBankId(props.bankId).then((response) => {
      setLoans(response.data);
    });
  }, [props.tab]);

  return (
    <div className="view-loans-bg">
      <div className="view-loan-title"> Education Loans</div>
      <div className="view-loans-container">
        {loans.map((loan) => (
          <LoanData key={loan.id} loan={loan}></LoanData>
        ))}
      </div>
    </div>
  );
};



const LoanData = ({ loan }) => {
  return (
    <div className="loan-container">
      <div className="loan-name">
        <span className="span-leftvalue">Name</span>
        <span className="span-rightvalue">{loan.name} </span>
      </div>
      <div className="loan-interest">
        <span className="span-leftvalue">Interest Rate</span>
        <span className="span-rightvalue">{loan.interest} %</span>
      </div>
      <div className="loan-bank">
        <span className="span-leftvalue">Bank</span>
        <span className="span-rightvalue">{loan.bank.name} </span>
      </div>
    </div>
  );
};
export default ViewLoans;
