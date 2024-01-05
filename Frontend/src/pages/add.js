import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import categories from "../data/category";
import Login from "./login";
import { useAuth } from "../context/authcontext";

const Add = ({ showAdd, onClose, onAdd }) => {
  const { user } = useAuth();
  const [itemDescription, setItemDescription] = useState("");
  const [selectedItemCategory, setSelectedItemCategory] = useState("");
  const [itemImages, setItemImages] = useState([]);
  const [itemPrice, setItemPrice] = useState(0);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    // Allow up to 3 images
    const selectedImages = files
      .slice(0, 3)
      .map((file) => URL.createObjectURL(file));

    // Update the state with the new images
    setItemImages([...itemImages, ...selectedImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...itemImages];
    updatedImages.splice(index, 1);
    setItemImages(updatedImages);
  };

  const handleAdd = () => {
    // Perform any additional actions before adding the item
    onAdd({
      itemDescription,
      selectedItemCategory,
      itemImages,
      itemPrice,
    });
    // Close the add item popup
    onClose();
  };

  return (
    <Modal show={showAdd} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Item For Sell</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formItemDescription">
            <Form.Label>Item Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formItemCategory">
            <Form.Label>Select Category:</Form.Label>
            <Form.Control
              as="select"
              value={selectedItemCategory}
              onChange={(e) => setSelectedItemCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.slice(1).map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formItemImages">
            <Form.Label>Upload Images:</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="image-preview-container">
              {itemImages.map((image, index) => (
                <div key={index} className="image-preview">
                  <img
                    src={image}
                    alt={`item-img-${index}`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      margin: "10px",
                    }}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </Form.Group>

          <Form.Group controlId="formItemPrice">
            <Form.Label>Item Price:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter item price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add Item
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default Add;
