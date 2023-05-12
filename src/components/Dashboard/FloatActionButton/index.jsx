import { useState } from 'react';
import cn from 'classnames';
import { AiFillPlusCircle, AiFillBank } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

import CreateTransactionModal from '../../Transactions/CreateTransactionModal';

import './styles.scss';

const FloatActionButton = () => {
  const [open, setOpen] = useState(false);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const handleShowTransactionsModal = () => setShowTransactionsModal(true);
  const handleCloseTransactionsModal = () => setShowTransactionsModal(false);

  const actions = [
    {
      label: 'New Category',
      icon: <BiCategory />,
      color: '#333333',
      onClick: console.log,
    },
    {
      label: 'New Source',
      icon: <AiFillBank />,
      color: '#333333',
      onClick: console.log,
    },
    {
      label: 'New Income',
      icon: <FaMoneyBillAlt />,
      color: '#276221',
      onClick: handleShowTransactionsModal,
    },
    {
      label: 'New Expense',
      icon: <FaMoneyBillAlt />,
      color: '#ff0000',
      onClick: handleShowTransactionsModal,
    },
  ];

  return (
    <>
      <ul className="fab-container" onClick={() => setOpen(!open)}>
        <li className="fab-button">
          <AiFillPlusCircle />
        </li>
        {actions.map((action, index) => (
          <li
            style={{ transitionDelay: `${index * 25}ms`, color: action.color }}
            className={cn('fab-action', { open })}
            key={action.label}
            onClick={action.onClick}
          >
            {action.icon}
            <span className="tooltip">{action.label}</span>
          </li>
        ))}
      </ul>
      <CreateTransactionModal
        status={showTransactionsModal}
        handleCloseTransactionsModal={handleCloseTransactionsModal}
      />
    </>
  );
};

export default FloatActionButton;
