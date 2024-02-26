import React from "react";
import { Form, Button } from "react-bootstrap";
const RestuarantForm = ({ handleChange = () => {}, formData = {} }) => {
  return (
    <>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        
        <Form.Control.Feedback type="invalid">
          Please provide a category.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a price.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control
          type="number"
          name="cost"
          placeholder="Enter cost"
          value={formData.cost}
          onChange={handleChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a cost.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="totalstock">
        <Form.Label>Total Stock</Form.Label>
        <Form.Control
          type="number"
          name="totalstock"
          placeholder="Enter total stock"
          value={formData.totalstock}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="size">
        <Form.Label>Size</Form.Label>
        <Form.Control
          as="select"
          name="size"
          value={formData.size}
          onChange={handleChange}
        >
          <option>select size</option>
          <option value="1">Large</option>
          <option value="2">Medium</option>
          <option value="3">Small</option>
        </Form.Control>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="mt-3 btn btn-secondary btn-sm"
      >
        {formData?.id ? "Update Menu" : "Create Menu"}
      </Button>
    </>
  );
};

export default RestuarantForm;
