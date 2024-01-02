import React, { useState, useEffect } from "react";
import CollegeService from "../Service/CollegeService";
import "./ViewStudents.css";

const ViewStudents = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("Render View Students");
    CollegeService.getAllStudentsById(props.collegeId).then((response) => {
      setStudents(response.data);
    });
  }, [props.tab]);
  return (
    <div className="view-students-bg">
      <div className="view-students-title">List of Student Record</div>
      <div className="view-students-container">
        {students.map((student) => (
          <StudentData key={student.id} student={student}></StudentData>
        ))}
      </div>
    </div>
  );
};

const StudentData = ({ student }) => {
  return (
    <div className="student-container">
      <div className="student-reg">
        <span className="student-span-leftvalue">Student Number</span>
        <span className="student-span-rightvalue">{student.reg} </span>
      </div>
      <div className="student-name">
        <span className="student-span-leftvalue">Name</span>
        <span className="student-span-rightvalue">{student.name}</span>
      </div>
      <div className="student-dob">
        <span className="student-span-leftvalue">Date of Birth</span>
        <span className="student-span-rightvalue">{student.dob} </span>
      </div>
      <div className="student-college">
        <span className="student-span-leftvalue">College</span>
        <span className="student-span-rightvalue">{student.college} </span>
      </div>
      <div className="student-dep">
        <span className="student-span-leftvalue">Department</span>
        <span className="student-span-rightvalue">{student.department} </span>
      </div>
    </div>
  );
};
export default ViewStudents;
