import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/students/student/${id}`);
    setStudent(result.data);
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid mb-3"
                  style={{ width: 150 }}
                />
                <h5 className="my-3 text-primary">
                  {`${student.firstName} ${student.lastName}`}
                </h5>
                <div className="d-flex justify-content-center">
                  {/* <button type="button" className="btn btn-primary me-2">
                    <i className="bi bi-telephone-fill me-1"></i> Call
                  </button> */}
                  <button type="button" className="btn btn-warning">
                    <i className="bi bi-chat-fill me-1"></i> Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-body">
                <div className="mb-4 text-center">
                  <h4 className="text-primary">Student Information</h4>
                  <hr className="my-2" />
                </div>

                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0">{student.firstName}</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0">{student.lastName}</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0">{student.email}</p>
                  </div>
                </div>
                <hr className="my-2" />

                <div className="row mb-3">
                  <div className="col-sm-4">
                    <h6 className="mb-0">Department</h6>
                  </div>
                  <div className="col-sm-8">
                    <p className="text-muted mb-0">{student.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
