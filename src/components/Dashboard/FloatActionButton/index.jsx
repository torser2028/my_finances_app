import { useState } from 'react';
import cn from 'classnames';
import { AiFillPlusCircle, AiFillBank } from 'react-icons/ai';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

import './styles.scss';

const FloatActionButton = () => {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: 'New Category', icon: <BiCategory />, onClick: console.log },
    { label: 'New Source', icon: <AiFillBank />, onClick: console.log },
    { label: 'New Income', icon: <FaMoneyBillAlt />, onClick: console.log },
    { label: 'New Expense', icon: <FaMoneyBillAlt />, onClick: console.log },
  ];

  return (
    <ul className="fab-container" onClick={() => setOpen(!open)}>
      <li className="fab-button">
        <AiFillPlusCircle />
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn('fab-action', { open })}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FloatActionButton;
