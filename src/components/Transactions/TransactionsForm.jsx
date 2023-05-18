import Form from 'react-bootstrap/Form';

const TransactionsForm = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  console.log('formData in TransactionsForm: ', formData);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter expense description"
          value={formData?.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="value">
        <Form.Label>Value</Form.Label>
        <Form.Control
          name="value"
          type="number"
          placeholder="Value"
          value={formData?.value}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Select Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          placeholder="Transaction Date"
          value={formData?.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Select Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={formData?.category}
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
          value={formData?.source}
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
