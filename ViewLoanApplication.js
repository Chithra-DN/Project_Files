import { Button, Form, Input, DatePicker, Upload, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "./ViewLoanApplication.css";
import LoanApplicationService from "../Service/LoanApplicationService";

const ViewLoanApplication = ({ loanApplication }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [document1, setDocument1] = useState(loanApplication.doc1);
  const [document2, setDocument2] = useState(loanApplication.doc2);
  const [document3, setDocument3] = useState(loanApplication.doc3);
  const [docFileName1, setDoc1FileName] = useState(
    loanApplication.doc1Filename
  );
  const [docFileName2, setDoc2FileName] = useState(
    loanApplication.doc2Filename
  );
  const [docFileName3, setDoc3FileName] = useState(
    loanApplication.doc3Filename
  );

  useEffect(() => {
    console.log("View Loan application");
    if (loanApplication.status === "PENDING") {
      setShowEdit(true);
    }
  }, []);

  const handleDoc1 = (e) => {
    console.log(e.file.originFileObj);
    let file1 = e.file.originFileObj;
    setDoc1FileName(file1.name);
    const reader = new FileReader();
    reader.readAsDataURL(file1);
    reader.onload = () => {
      setDocument1(reader.result);
    };
  };

  const handleDoc2 = (e) => {
    console.log(e.file.originFileObj);
    let file2 = e.file.originFileObj;
    setDoc2FileName(file2.name);
    const reader = new FileReader();
    reader.readAsDataURL(file2);
    reader.onload = () => {
      setDocument2(reader.result);
    };
  };

  const handleDoc3 = (e) => {
    console.log(e.file.originFileObj);
    let file3 = e.file.originFileObj;
    setDoc3FileName(file3.name);
    const reader = new FileReader();
    reader.readAsDataURL(file3);
    reader.onload = () => {
      setDocument3(reader.result);
    };
  };

  const onSelectSubmit = () => {
    console.log("Submit loan application status");
    const newBody = {
      ...loanApplication,
      doc1: document1,
      doc2: document2,
      doc3: document3,
      doc1Filename: docFileName1,
      doc2Filename: docFileName2,
      doc2Filename: docFileName3,
      status: "REVIEW",
    };
    console.log("Loan Application after student edit and submit :", newBody);

    LoanApplicationService.save(newBody)
      .then((response) => {
        console.log("Loan Application subimited successfully");
        alert("Loan Application updated successfully");
        setShowEdit(false);
      })
      .catch((error) => {
        alert("Failed to submit loan application");
      });
  };

  console.log("View Loan Application :", loanApplication);

  return (
    <div className="view-loan-app-bg">
      <div className="view-loan-app-container">
        <div className="view-loan-app-header">Application</div>
        <div className="view-loanApp-id">
          <span className="loanApp-span-leftvalue">Application Id</span>
          <span className="loanApp-span-rightvalue">{loanApplication.id} </span>
        </div>
        <div className="view-loanApp-date">
          <span className="loanApp-span-leftvalue">Application Date</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.date}{" "}
          </span>
        </div>
        <div className="view-loanApp-stdname">
          <span className="loanApp-span-leftvalue">Applicant Name</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.student.name}{" "}
          </span>
        </div>
        <div className="view-loanApp-name">
          <span className="loanApp-span-leftvalue">Loan Name</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.loan.name}{" "}
          </span>
        </div>
        <div className="view-loanApp-amt">
          <span className="loanApp-span-leftvalue">Loan Amount</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.loanAmt} ₹{" "}
          </span>
        </div>
        <div className="view-loanApp-interest">
          <span className="loanApp-span-leftvalue">
            Loan Intereset Rate (p.a)
          </span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.loan.interest} %{" "}
          </span>
        </div>
        <div className="view-loanApp-bank">
          <span className="loanApp-span-leftvalue">Bank</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.loan.bank.name}{" "}
          </span>
        </div>
        <div className="view-loanApp-branch">
          <span className="loanApp-span-leftvalue">Branch</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.loan.bank.branch}{" "}
          </span>
        </div>
        <div className="view-loanApp-tenure">
          <span className="loanApp-span-leftvalue">Loan Tenure (years)</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.tenure}{" "}
          </span>
        </div>
        <div className="view-loanApp-comment">
          <span className="loanApp-span-leftvalue">Comments</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.comment}{" "}
          </span>
        </div>
        <div className="view-loanApp-status">
          <span className="loanApp-span-leftvalue">Loan Status</span>
          <span className="loanApp-span-rightvalue">
            {loanApplication.status}{" "}
          </span>
        </div>
        <div className="documents" style={{ display: "flex", alignItems: "center" }}>
  <div className="doc1" style={{ flex: "1",marginRight: "10px", marginLeft:"35px",  maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "left" }}>
    Aadhaar Card
  </div>
  <div className="doc1-val" style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
    <a
      className="doc1-href"
      href={loanApplication.doc1}
      color="transparent"
      target="_blank"
      download
      style={{
        maxWidth: "300px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "right"
      }}
    >
      {loanApplication.doc1Filename}
    </a>
  </div>
  <div className="doc1-edit" style={{ marginLeft: "10px", marginRight: "10px", textAlign: "right" }}>
    {showEdit && (
      <Upload onChange={handleDoc1}>
        <Button
          className="loanApp-view-btn-editdoc1"
          size="small"
          icon={<EditOutlined />}
        ></Button>
      </Upload>
    )}
  </div>
</div>

<div className="documents" style={{ display: "flex", alignItems: "center" }}>
  <div className="doc2" style={{ flex: "1", marginRight: "10px", maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "right" }}>
    SSLC Marks Card
  </div>
  <div className="doc2-val" style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
    <a
      className="doc2-href"
      href={loanApplication.doc2}
      color="transparent"
      target="_blank"
      download
      style={{
        maxWidth: "220px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "right"
      }}
    >
      {loanApplication.doc2Filename}
    </a>
  </div>
  <div className="doc2-edit" style={{ marginLeft: "10px", marginRight: "10px", textAlign: "right" }}>
    {showEdit && (
      <Upload onChange={handleDoc2}>
        <Button
          className="loanApp-view-btn-editdoc1"
          size="small"
          icon={<EditOutlined />}
        ></Button>
      </Upload>
    )}
  </div>
</div>

<div className="documents" style={{ display: "flex", alignItems: "center" }}>
  <div className="doc3" style={{ flex: "1", marginRight: "10px", maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "right" }}>
    PUC Marks Card
  </div>
  <div className="doc3-val" style={{ flex: "1", marginRight: "10px", textAlign: "right" }}>
    <a
      className="doc3-href"
      href={loanApplication.doc3}
      color="transparent"
      target="_blank"
      download
      style={{
        maxWidth: "220px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "right"
      }}
    >
      {loanApplication.doc3Filename}
    </a>
  </div>
  <div className="doc3-edit" style={{ marginLeft: "10px", marginRight: "10px", textAlign: "right" }}>
    {showEdit && (
      <Upload onChange={handleDoc3}>
        <Button
          className="loanApp-view-btn-editdoc1"
          size="small"
          icon={<EditOutlined />}
        ></Button>
      </Upload>
    )}
  </div>
</div>



        <div className="loan-app-std-submit">
          {showEdit && (
            <Button
              className="loanApp-std-edit-submit"
              onClick={() => onSelectSubmit()}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ViewLoanApplication;
