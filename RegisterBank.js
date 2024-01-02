import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import BankService from "../Service/BankService";
import "./RegisterBank.css";

const RegisterBank = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      name: values.bankname,
      branch: values.branch,
      city: values.city,
      username: values.username,
      password: values.password,
    };

    BankService.save(data)
      .then((res) => {
        console.log("Bank record added");
      alert("Bank registered successfully");
      })
      .catch((error) => {
        alert("Failed to register bank. ");
      });

      // axios.post("http://localhost:8081/bank/add",data)
      // .then((res) => {
      //   console.log("Bank record added");
      // alert("Bank registered successfully");
      // })
      // .catch((error) => {
      //   alert("Failed to register bank. ");
      // });


    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("Render RegisterBank");
  }, [props.tab]);

  return (
    <div className="register-bank-bg">
      <div className="register-bank-form-container">
        <Form
          className="register-bank-form"
          form={form}
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 13,
          }}
          style={{
            maxWidth: 600,
          }}
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Bank Name"
            name="bankname"
            rules={[
              {
                required: true,
                message: "Please input bank name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Bank name should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Branch"
            name="branch"
            rules={[
              {
                required: true,
                message: "Please input branch!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Branch name should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "Please input city!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "City name should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username (Bank Represntative)"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input username!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Username should contain alphabets only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input password!",
              },
              {
                pattern: /^(?=.*[A-Za-z]{3,})(?=.*\d{3,}).*$/,
                message: "Password must contain at least 3 alphabets and 3 digits!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
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
export default RegisterBank;
