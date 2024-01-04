import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

const Register = ({ register }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    register();
    console.log("Registering with:", { firstName, lastName, email, password });
  };

  return (
    <MDBContainer fluid className="p-0">
      <MDBRow className="justify-content-center">
        <MDBCol md="6" className="text-center mb-4">
          <img
            src="/main-logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="p-5">
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-0"
                    label="First Name"
                    id="formFirstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    icon="user"
                    iconPosition="left"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-0"
                    label="Last Name"
                    id="formLastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    icon="user"
                    iconPosition="left"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-0"
                    label="Email"
                    id="formEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon="envelope"
                    iconPosition="left"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-0"
                    label="Password"
                    id="formPassword"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon="lock"
                    iconPosition="left"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn
                variant="primary"
                block
                onClick={handleRegister}
                style={{ backgroundColor: "#4caf50" }}
              >
                Register
              </MDBBtn>
              <p
                className="small fw-bold mt-2 pt-1 mb-2"
                style={{ color: "#b3b3b3" }}
              >
                Already have an account?{" "}
                <a href="#!" className="link-danger" onClick={handleRegister}>
                  Login
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
