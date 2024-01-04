import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import categories from "../data/category";
import RangeSlider from "react-bootstrap-range-slider";

const Filter = ({ showFilter, onClose, onApply }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value.split(",").map(Number));
  };

  const handleApply = () => {
    // You can perform any additional actions here before applying the filter
    onApply({ selectedCategories, priceRange });
    // Close the filter popup
    onClose();
  };

  return (
    <Modal show={showFilter} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Filter Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCategories">
            <Form.Label>Select Categories:</Form.Label>
            {categories.map((category) => (
              <Form.Check
                key={category.value}
                type="checkbox"
                label={category.label}
                checked={selectedCategories.includes(category.value)}
                onChange={() => handleCategoryChange(category.value)}
              />
            ))}
          </Form.Group>

          <Form.Group controlId="formPriceRangeSlider">
            <Form.Label>Price Range:</Form.Label>
            <Row>
              <Col>
                <Form.Label>Min Price:</Form.Label>
                <RangeSlider
                  // value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min={0}
                  max={maxPrice}
                  step={10}
                />
              </Col>
              <Col>
                <Form.Label>Max Price:</Form.Label>
                <RangeSlider
                  // value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min={minPrice}
                  max={1000}
                  step={10}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Enter max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Min Price: ${minPrice}</Form.Label>
              </Col>
              <Col>
                <Form.Label>Max Price: ${maxPrice}</Form.Label>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply Filter
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Filter;
