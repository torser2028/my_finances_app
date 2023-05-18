import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';

import { createTransaction } from '../../redux/slices/transactions';
import TransactionsForm from './TransactionsForm';

const CreateTransactionModal = ({
  status,
  handleCloseTransactionsModal,
  type,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    date: '',
    category_id: '1',
    source_id: '2',
    transaction_type: type,
    user_id: '1',
  });

  const dispatch = useDispatch();
  const addTransaction = (e) => {
    e.preventDefault();
    dispatch(createTransaction({ transaction: formData }));
  };
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={status} onHide={handleCloseTransactionsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionsForm
            type={type}
            formData={formData}
            setFormData={setFormData}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTransactionsModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => addTransaction(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateTransactionModal;
