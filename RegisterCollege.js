import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import CollegeService from "../Service/CollegeService";
import "./RegisterCollege.css";

const RegisterCollege = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      name: values.collegename,
      city: values.city,
      username: values.username,
      password: values.password,
    };

    CollegeService.save(data)
      .then((response) => {
        console.log("Bank record added");
        alert("College registered successfully");
      })
      .catch((error) => {
        alert("Failed to register college details. ");
      });

    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("Render RegisterCollege");
  }, [props.tab]);

  return (
    <div className="regist-clg-bg">
      <div className="register-college-form-container">
        <Form
          className="register-college-form"
          form={form}
          name="register-college-form"
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
            label="College Name"
            name="collegename"
            rules={[
              {
                required: true,
                message: "Please input college name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "College name should contain alphabets only!",
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
            label="Username (College Representative)"
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
export default RegisterCollege;
