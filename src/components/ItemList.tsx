import React from 'react';
import Item from './Item';
import './ItemList.css';

interface Item {
  id: number;
  text: string;
  number: number | string;
}

interface ItemListProps {
  items: Item[];
  filter: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items,filter, onEdit, onDelete }) => {
  
  const itemsFilter = items.filter(item => (item.text.includes(filter)||(!filter)));

  return (
    <div className="items-list">
      {itemsFilter.map(item => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          number={item.number}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ItemList;