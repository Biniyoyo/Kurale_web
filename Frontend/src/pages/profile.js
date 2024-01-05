import React, { useState } from "react";
import { Modal, Button, Row, Col, Image, Badge } from "react-bootstrap";
import { BiListUl, BiCart, BiEdit, BiLogOut } from "react-icons/bi"; // Import Bootstrap icons
import EditProfile from "../components/editProfile";
import Login from "./login";
import { useAuth } from "../context/authcontext";

const Profile = ({ showProfile, onClose }) => {
  const { user, logout } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleEditProfileClick = () => {
    setShowEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
  };

  const handleLogout = () => {
    logout()
  };

  return (
    <Modal show={showProfile} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-4">
          <Col className="text-center">
            <Image
              src="/main-logo.png"
              alt="Profile Image"
              roundedCircle
              style={{ width: "80px", height: "80px" }}
            />
            <p className="mt-2">{user?user.name:""}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Button variant="primary" block>
              <BiListUl className="mb-1 mr-1" /> List of Selling Items
            </Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Button variant="info" block>
              <BiCart className="mb-1 mr-1" /> View Your Cart
            </Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Button variant="primary" onClick={handleEditProfileClick}>
              <BiEdit className="mb-1 mr-1" /> Edit Profile
            </Button>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <p className="mb-1">Address:</p>
            <Badge variant="secondary">Your Detailed Address</Badge>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleLogout}>
          <BiLogOut className="mb-1 mr-1" /> Logout
        </Button>
      </Modal.Footer>
      {/* "Edit Profile" popup */}
      <EditProfile
        showEditProfile={showEditProfile}
        onClose={handleCloseEditProfile}
      />
    </Modal>
  )
};

export default Profile;
