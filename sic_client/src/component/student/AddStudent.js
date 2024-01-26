import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    navigate("/view-students");
  };

  return (
    <div className="col-md-8 mx-auto my-5 p-4 shadow rounded bg-light">
      <h2 className="mb-4 text-center">Add Student</h2>
      <form onSubmit={(e) => saveStudent(e)}>
        {/* Input Fields */}
        <div className="mb-3 row">
          <label htmlFor="firstName" className="col-sm-3 col-form-label">
            First Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="lastName" className="col-sm-3 col-form-label">
            Last Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Your Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="department" className="col-sm-3 col-form-label">
            Department
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              required
              value={department}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="row">
          <div className="col-sm-6 mb-3">
            <button type="submit" className="btn btn-success btn-lg w-100">
              <FaSave className="me-2" />
              Save
            </button>
          </div>
          <div className="col-sm-6 mb-3">
            <Link to={"/view-students"} className="btn btn-warning btn-lg w-100">
              <FaTimes className="me-2" />
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
