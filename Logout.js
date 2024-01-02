import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };
  return (
    <div className="logout-button">
      <Button
        className="logout-submit-button"
        type="primary"
        icon={<LogoutOutlined />}
        size="small"
        shape="circle"
        onClick={onLogout}
      />
    </div>
  );
};

export default Logout;
