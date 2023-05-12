import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const TransactionsForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    date: '',
    category: '',
    source: '',
    type: type,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`,
    );
  };
  console.log(formData);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter expense description"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="value">
        <Form.Label>Value</Form.Label>
        <Form.Control
          type="number"
          placeholder="Value"
          value={formData.value}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Select Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          placeholder="Transaction Date"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Select Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="source">
        <Form.Label>Select Source</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={formData.source}
          onChange={handleChange}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default TransactionsForm;

// t.string "type"
// t.string "name"
// t.datetime "date"
// t.float "value"
// t.datetime "reminder"
// t.bigint "category_id", null: false
// t.bigint "source_id", null: false
