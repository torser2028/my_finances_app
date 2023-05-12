import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import TransactionsForm from './TransactionsForm';

const CreateTransactionModal = ({
  status,
  handleCloseTransactionsModal,
  type,
}) => {
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
          <Button variant="primary" onClick={handleCloseTransactionsModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateTransactionModal;
