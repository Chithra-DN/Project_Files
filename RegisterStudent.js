import { Button, Form, Input, DatePicker } from "antd";
import { useEffect, useState } from "react";
import CollegeService from "../Service/CollegeService";
import "./RegisterStudent.css";
import React from "react";
import moment from "moment";

const RegisterStudent = (props) => {
  const [form] = Form.useForm();
  const [studentDob, setDob] = useState("");
  const [college, setCollege] = React.useState({});

  const onFinish = (values) => {
    console.log("Success:", values);

    const data = {
      reg: values.regnumber,
      name: values.name,
      dob: studentDob,
      department: values.department,
      username: values.username,
      password: values.password, 
    };

    console.log("Student:", data);

    CollegeService.saveStudent(college.id, data)
      .then((response) => {
        console.log("Student added successfully");
        alert("Student details registered successfully");
        form.resetFields();
      })
      .catch((error) => {
        alert("Failed to add Student details. ");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log("date ", dateString);
    setDob(dateString);
  };

  const validateDOB = (_, value) => {
    if (value && value.isBefore(moment().subtract(16, 'years'))) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Date of Birth must be greater than 16 years."));
  };
  

  useEffect(() => {
    console.log("Render Register student College Id = " + props.collegeId);
    CollegeService.get(props.collegeId).then((response) => {
      setCollege(response.data);
      console.log("College data = " + JSON.stringify(response.data, null, 2));
    });
  }, [props.tab]);

  return (
    <div className="register-student-bg">
      <div className="register-student-form-container">
        <div className="register-student-header">Register Student</div>
        <Form
          className="register-student-form"
          form={form}
          name="register-student-form"
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
            <Input />
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
                message: "student name should contain alphabet only!",
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
            <DatePicker onChange={onChange} />
          </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[
              {
                required: true,
                message: "Please input department!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "student name should contain alphabet only!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input username!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "student name should contain alphabet only!",
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
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 8,
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

export default RegisterStudent;
