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

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login();
    console.log("Logging in with:", { username, password });
  };

  return (
    <MDBContainer fluid className="p-4" >
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
                <a href="#!" className="link-danger">
                  Register
                </a>
              </p>
              <div className="text-center">
                <p>or sign in with:</p>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
