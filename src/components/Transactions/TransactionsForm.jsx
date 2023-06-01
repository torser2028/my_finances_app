import React from 'react';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { categoriesSelector } from '../../redux/slices/categories';
import { sourcesSelector } from '../../redux/slices/sources';

const TransactionsForm = ({ formData, setFormData }) => {
  const { categories } = useSelector(categoriesSelector);
  const { sources } = useSelector(sourcesSelector);

  const getCategories = () => {
    return categories?.map((category) => {
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });
  };

  const getSources = () => {
    return sources?.map((source) => {
      return (
        <option key={source} value={source.id}>
          {source.name}
        </option>
      );
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

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
          name="category_id"
          value={formData?.category}
          onChange={handleChange}
        >
          <option>Select the category from the list</option>
          {getCategories()}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="source">
        <Form.Label>Select Source</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="source_id"
          value={formData?.source}
          onChange={handleChange}
        >
          <option>Select the source from the list</option>
          {getSources()}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default TransactionsForm;
