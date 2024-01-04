import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const EditProfile = ({ showEditProfile, onClose }) => {
  const [newProfileImage, setNewProfileImage] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAddress, setNewAddress] = useState({
    country: "",
    state: "",
    city: "",
    more: "",
  });

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    // Handle the selected profile image file
    // ...

    // For demonstration purposes, updating the state with the file name
    setNewProfileImage(file.name);
  };

  const handleEditProfile = () => {
    // Perform any additional actions before saving the edited profile
    // ...

    // Close the "Edit Profile" popup
    onClose();
  };

  const handleDeleteAccount = () => {
    // Implement your account deletion logic here
    // ...

    // For demonstration purposes, close the "Edit Profile" popup
    onClose();
  };

  return (
    <Modal show={showEditProfile} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Profile Image */}
          <Form.Group controlId="formProfileImage" className="text-center">
            <div className="position-relative">
              <img
                src="/main-logo.png"
                alt="Profile"
                className="profile-image mb-2"
                style={{ width: "100px", height: "100px" }}
              />
              <label htmlFor="fileInput" className="choose-file-label">
                <AiOutlineEdit className="edit-icon" />
              </label>
              <Form.Control
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="file-input"
              />
            </div>
          </Form.Group>

          {/* User Name */}
          <Form.Group controlId="formUserName" className="mt-2">
            <Form.Label>Edit User Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your user name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formPassword" className="mt-2">
            <Form.Label>Edit Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          {/* Address */}
          <Form.Group controlId="formAddress" className="mt-2">
            <Form.Label>Address:</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  value={newAddress.country}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, country: e.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="State"
                  value={newAddress.state}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, state: e.target.value })
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
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDeleteAccount}>
          <AiOutlineDelete className="mb-1 mr-1" /> Delete Account
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditProfile}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfile;
