import { Button, Form, Input, DatePicker, Upload, InputNumber } from "antd";
import { useEffect, useState } from "react";
import "./LoanApplication.css";
import LoanApplicationService from "../Service/LoanApplicationService";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const LoanApplication = (props) => {
  const [form] = Form.useForm();

  console.log(props);

  const [studentDob, setDob] = useState("");
  const [document1, setDocument1] = useState("");
  const [document2, setDocument2] = useState("");
  const [document3, setDocument3] = useState("");
  const [docFileName1, setDoc1FileName] = useState("");
  const [docFileName2, setDoc2FileName] = useState("");
  const [docFileName3, setDoc3FileName] = useState("");

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

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      loanAmt: values.amount,
      tenure: values.tenure,
      date: values.date,

      doc1: document1,
      doc1Filename: docFileName1,

      doc2: document2,
      doc2Filename: docFileName2,

      doc3: document3,
      doc3Filename: docFileName3,

      status: "APPLIED",
      comment: "",
      student: props.student,
      loan: props.loan,
    };

    console.log("Loan Application :", data);

    LoanApplicationService.save(data)
      .then((response) => {
        console.log("Loan Application submitted successfully");
        alert("Loan Application submitted successfully");
      })
      .catch((error) => {
        alert("Failed to submit loan application");
      });

    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("Render Loan application");
    let date = new Date().toLocaleString();
    form.setFieldsValue({
      regnumber: props.student.reg,
      name: props.student.name,
      dob: props.student.dob,
      college: props.student.college,
      department: props.student.department,
      date: date,
      loan: props.loan.name,
      interest: props.loan.interest,
      bank: props.loan.bank.name,
      branch: props.loan.bank.branch,
    });

    form.setFields([
      {
        name: "dob",
        value: moment(props.student.dob),
        errors: [],
      },
    ]);
  }, [props.tab]);

  const validateDOB = (_, value) => {
    if (value && value.isBefore(moment().subtract(16, 'years'))) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Date of Birth must be greater than 16 years."));
  };

  return (
    <div className="loan-app-bg">
      <div className="loan-app-container">
        <div className="loan-application-header">Loan Application</div>
        <Form
          className="loan-app-form"
          form={form}
          name="loan-app-form"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 13,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Student Number"
            name="regnumber"
            rules={[
              {
                required: true,
                message: "Please input reg number!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Name should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input dob!",
              },
              {
                validator: validateDOB,
              },
            ]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            label="College"
            name="college"
            rules={[
              {
                required: true,
                message: "Please input college!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: "Please input department!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Application Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input date!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Loan Name"
            name="loan"
            rules={[
              {
                required: true,
                message: "Please input loan!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Interest Rate (p.a)"
            name="interest"
            rules={[
              {
                required: true,
                message: "Please input interest!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Bank"
            name="bank"
            rules={[
              {
                required: true,
                message: "Please input bank!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Branch"
            name="branch"
            rules={[
              {
                required: true,
                message: "Please input branch!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Loan Amount"
            name="amount"
            wrapperCol={{
              span: 4,
            }}
            rules={[
              {
                required: true,
                message: "Please input amount!",
              },
            ]}
          >
            <InputNumber min={10000} />
          </Form.Item>

          <Form.Item
            label="Loan Tenure"
            name="tenure"
            wrapperCol={{
              span: 4,
            }}
            rules={[
              {
                required: true,
                message: "Please input tenure!",
              },
            ]}
          >
            <InputNumber min={1} max={60} />
          </Form.Item>

          <Form.Item
            label="Aadhaar card"
            name="doc1"
            rules={[
              {
                required: true,
                message: "Please upload aadhaar card!",
              },
            ]}
          >
            <Upload onChange={handleDoc1}>
              <Button>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="SSLC Marks Card"
            name="doc2"
            rules={[
              {
                required: true,
                message: "Please upload sslc marks card!",
              },
            ]}
          >
            <Upload onChange={handleDoc2}>
              <Button>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="PUC Marks Card"
            name="doc3"
            rules={[
              {
                required: true,
                message: "Please upload puc marks card!",
              },
            ]}
          >
            <Upload onChange={handleDoc3}>
              <Button>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 13,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoanApplication;
