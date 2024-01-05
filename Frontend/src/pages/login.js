import React, { useState } from "react";
import Register from "./register";
import { useAuth } from "../context/authcontext";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = ({ logintemp }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerbtn, setRegisterbtn] = useState(false);

  const handleLogin = () => {
    logintemp();
    var email = username
    login({ email, password });
  };

  const handleRegister = () => {
    setRegisterbtn(!registerbtn);
    console.log("Navigating to Register...");
  };
  return registerbtn ? (
    <Register />
  ) : (
    <MDBContainer fluid className="p-4">
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
                    label="Username"
                    id="formUsername"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    icon="user"
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
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>
              <MDBBtn variant="primary" block onClick={handleLogin}>
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="#!" className="link-danger" onClick={handleRegister}>
                  Register
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
