import { Button, Form, Input, DatePicker, Upload, InputNumber } from "antd";
import "./ViewProfile.css";

const ViewProfile = ({ student }) => {
  console.log("View Profile :", student);

  return (
    <div className="view-stdprofile-bg">
      <div className="view-stdprofile-container">
        <div className="view-stdprofile-header">
          <span className="stdprofile-header">Profile Details</span>
        </div>
        <div className="view-stdprofile-reg">
          <span className="loanApp-span-leftvalue">Student Number</span>
          <span className="loanApp-span-rightvalue">{student.reg} </span>
        </div>
        <div className="view-stdprofile-name">
          <span className="loanApp-span-leftvalue">Name</span>
          <span className="loanApp-span-rightvalue">{student.name} </span>
        </div>
        <div className="view-stdprofile-dob">
          <span className="loanApp-span-leftvalue">Date of birth</span>
          <span className="loanApp-span-rightvalue">{student.dob} </span>
        </div>
        <div className="view-stdprofile-college">
          <span className="loanApp-span-leftvalue">College</span>
          <span className="loanApp-span-rightvalue">{student.college} </span>
        </div>
        <div className="view-stdprofile-department">
          <span className="loanApp-span-leftvalue">Department</span>
          <span className="loanApp-span-rightvalue">{student.department} </span>
        </div>
        <div className="view-stdprofile-username">
          <span className="loanApp-span-leftvalue">Username</span>
          <span className="loanApp-span-rightvalue">{student.username} </span>
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
