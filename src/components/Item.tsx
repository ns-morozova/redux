import React from 'react';
import './Item.css';

interface ItemProps {
  id: number;
  text: string;
  number: number | string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, text, number, onEdit, onDelete }) => {
  return (
    <div className="item">
      <span>{text}</span>
      <span>{number}</span>
      <button onClick={() => onEdit(id)} className="edit-button">✏️</button>
      <button onClick={() => onDelete(id)} className="delete-button">❌</button>
    </div>
  );
};

export default Item;