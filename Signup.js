import Password from "antd/es/input/Password";
import React from "react";
import { Form, Input, Button } from "antd";
import AdminService from "../Service/AdminService";
import "./Signup.css";

const Signup = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      username: values.username,
      password: values.password,
    };

    console.log("Admin:", data);

    AdminService.save(data)
      .then((response) => {
        console.log("Admin registered");
        alert("Admin record registered successfully");
        form.resetFields();
      })
      .catch((error) => {
        alert("Failed to register admin. ");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signup-bg">
      <div className="signup-container">
        <div className="signup-header">Register Admin</div>
        <div className="register-text-centre">
          Already registered ?
          <span className="link-primary" onClick={props.changeAuthMode}>
            {" "}
            Sign In{" "}
          </span>
        </div>
        <Form
          className="signup-form"
          form={form}
          name="signup-loan-form"
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input admin username!",
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
                message: "Please input admin password!",
              },
              {
                pattern: /^(?=.*[A-Za-z]{3,})(?=.*\d{3,}).*$/,
                message: "Password must contain at least 3 alphabets and 3 digits!",
              },
            ]}
          >
            <Password />
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "center" }}>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
  <Form.Item>
    <Button type="default" onClick={props.changeAuthMode} style={{marginLeft:"10px"}}>
      Back
    </Button>
  </Form.Item>
</div>

        </Form>
      </div>
    </div>
  );
};
export default Signup;
