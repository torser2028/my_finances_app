import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { useEffect, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { createTransaction } from '../../redux/slices/transactions';

import { useDispatch } from 'react-redux';

import TransactionsForm from './TransactionsForm';

const CreateTransactionModal = ({
  status,
  handleCloseTransactionsModal,
  type,
}) => {
  const dispatch = useDispatch();
  const addTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      transaction_type: 'expense',
      name: 'Testing',
      date: '15/05/2023',
      value: '500000',
      category_id: '1',
      source_id: '2',
      user_id: '1',
    };
    console.log(transaction);
    dispatch(createTransaction({ transaction }));
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
          <TransactionsForm type={type} />
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
