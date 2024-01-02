import { Button, Form, Input, InputNumber } from "antd";
import { useEffect, useState } from "react";
import LoanService from "../Service/LoanService";
import BankService from "../Service/BankService";
import "./RegisterLoan.css";

const RegisterLoan = (props) => {
  const [form] = Form.useForm();
  const [bankData, setBank] = useState({});

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      name: values.loanname,
      interest: values.interest,
      bank: bankData,
    };

    console.log("Loan:", data);

    LoanService.save(data)
      .then((response) => {
        console.log("Loan details added");
        alert("Loan details added successfully");
      })
      .catch((error) => {
        alert("Failed to add loan details. ");
      });

    form.resetFields();
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert("onFinishFailed function is executed")
  };

  useEffect(() => {
    console.log("Render Register Loan");
    BankService.get(props.bankId).then((response) => {
      setBank(response.data);
    });
  }, [props.tab]);

  return (
    <div className="register-loan-bg">
      <div className="register-loan-form-container">
        <div className="register-loan-header">Register Loan Details</div>
        <Form
          className="register-loan-form"
          form={form}
          name="register-loan-form"
          labelCol={{
            span: 10,
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
            label="Loan Name"
            name="loanname"
            rules={[
              {
                required: true,
                message: "Please input loan name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Loan name should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Interest rate p.a"
            name="interest"
            rules={[
              {
                required: true,
                message: "Please input loan interest rate!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
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
export default RegisterLoan;
