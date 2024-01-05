import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const Register = ({ register }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [newAddress, setNewAddress] = useState({
    country: "",
    state: "",
    city: "",
    more: "",
  });
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Check if any field is empty
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !repeatPassword ||
      !newAddress.country ||
      !newAddress.state ||
      !newAddress.city
    ) {
      setError("All fields are required");
      return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // Perform registration logic
    register();
    console.log("Registering with:", {
      firstName,
      lastName,
      email,
      password,
      address: newAddress,
    });
  };

   const handleLogin = () => {
     // Redirect to login page
     // Replace the following line with the logic to navigate to the login page
     window.location.href = "/login";
   };

  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col md="6" className="text-center m-4">
          <img
            src="/main-logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="6">
          <Form>
            <Form.Group controlId="formFirstName" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col xs="9">
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col xs="9">
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col xs="9">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col xs="9">
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formRepeatPassword" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>Repeat Password</Form.Label>
                </Col>
                <Col xs="9">
                  <Form.Control
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-4">
              <Row>
                <Col xs="3">
                  <Form.Label>Address:</Form.Label>
                </Col>
                <Col xs="9">
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        value={newAddress.country}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            country: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            state: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, city: e.target.value })
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="More"
                        value={newAddress.more}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, more: e.target.value })
                        }
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>

            <Button
              variant="primary"
              block
              onClick={handleRegister}
              style={{ backgroundColor: "#4caf50" }}
            >
              Register
            </Button>

            <p
              className="small fw-bold mt-2 pt-1 mb-2"
              style={{ color: "#b3b3b3" }}
            >
              Already have an account?{" "}
              <a href="#!" className="link-danger" onClick={handleLogin}>
                Login
              </a>
            </p>
            <p className="text-danger">{error}</p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
