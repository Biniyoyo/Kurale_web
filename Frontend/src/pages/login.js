import React, { useState } from "react";
import Register from "./register";
import { useAuth } from "../context/authcontext";
import { Button} from "react-bootstrap";
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

const Login = () => {
  const { login, error,setError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerbtn, setRegisterbtn] = useState(false);

  const handleLogin = async () => {
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Please fill in both username and password.");
      return;
    }

    try {
      const email = username;
      await login({ email, password });
    } catch (error) {
      setError("Incorrect username or password.");
    }
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
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>
              <Button variant="primary" block onClick={handleLogin}>
                Login
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="#!" className="link-danger" onClick={handleRegister}>
                  Register
                </a>
              </p>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                <a
                  href="#!"
                  className="link"
                  onClick={() => window.location.reload()}
                >
                  Continue as Guest
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
